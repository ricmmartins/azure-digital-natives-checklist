---
nav_exclude: true
---

# Azure Virtual Machine Scale Sets (VMSS)

Azure Virtual Machine Scale Sets (VMSS) provide a powerful, scalable computing service designed to automate the deployment and management of identical virtual machines (VMs) in Azure. This document offers a technical primer focused on self-managed VMSS deployments, explaining core concepts, features, and best practices for advanced users. Although VMSS technology underpins services like Azure Kubernetes Service (AKS) and Azure CycleCloud, the scope here will specifically address standalone usage.

For detailed official documentation, see:

* [Azure Virtual Machine Scale Sets overview](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)
* [Quickstart: Create a Virtual Machine Scale Set](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/quick-create-bicep)

## Overview and Key Concepts

### What are VM Scale Sets?

VMSS allows you to create and manage a group of identical, load-balanced VMs. These sets are highly scalable, resilient, and ideal for workloads that require automatic scaling and redundancy. With VMSS, you can efficiently manage large-scale deployments without manual intervention, providing significant operational efficiencies.

### Key Benefits

* **Automated Scaling:** Automatically add or remove instances based on defined metrics or schedules.
* **High Availability:** Distribute VMs across fault domains and availability zones.
* **Simplified Management:** Centralized deployment, updating, and management through declarative templates.
* **Integration:** Seamlessly integrates with load balancers, application gateways, and Azure Monitor.

Further reading:

* [VM Scale Set Automatic Scaling](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-autoscale-overview)
* [VM Scale Set Availability](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/availability)

## Technical Implementation (Bicep Example)

The following practical example utilizes Azure Bicep, Azure's declarative infrastructure-as-code language, providing clarity and simplicity compared to traditional ARM templates.

### Summary of Attached Bicep File (`mi300x-vmss.bicep`)

The provided Bicep file sets up a comprehensive environment in the `francecentral` region with:

* A **Virtual Machine Scale Set** (`Standard_ND96isr_MI300X_v5` SKU) intended for high-performance computing workloads.
* **Azure Storage Account** and a corresponding Azure File Share for shared storage.
* **Virtual Network (VNet)** with a default subnet.
* **Network Security Group (NSG)** with rules to allow SSH access.
* **Custom initialization script (cloud-init)** via the `customData` parameter for additional configuration at VM boot.

#### Resources Defined:

* **Virtual Machine Scale Set (VMSS)**
* **Storage Account** (Standard\_LRS)
* **Azure File Share**
* **Network Security Group (NSG)** allowing SSH (`TCP/22`)
* **Virtual Network** (`myVnet`) and subnet (`default`)

#### Special Notes:

* The script leverages dynamic parameters to securely pass storage account credentials at runtime via cloud-init script processing (`sed` replacement within the VM during initialization).
* SSH key-based authentication is enforced, enhancing security.

### Cloud-Init Script (`mi300x-cloudinit.sh`)

The VM initialization script automates mounting an Azure File Share (`vmshare`) onto each VM instance.

Key operations in the script:

* Updates package lists and installs required tools (`cifs-utils`).
* Securely stores Azure Storage credentials.
* Configures file share mounting via `/etc/fstab` for automatic persistence.

#### Security Consideration:

Credentials are securely handled by:

* Placing them in a restricted permissions file (`600` mode).
* Ensuring credentials are dynamically generated at VM creation, avoiding hardcoded secrets.

---

## Example Bicep Code

```bicep
param location string = 'francecentral'
param vmssName string = 'mi300x-vmss'
param instanceCount int = 16
param adminUsername string = 'azureuser'
@secure()
param sshPublicKey string
param initScriptUrl string = 'https://public-url-to-cloudinit/mi300x-cloudinit.sh'

resource storageAcct 'Microsoft.Storage/storageAccounts@2024-11-01' = {
  name: toLower('stg${resourceGroup().name}')
  location: location
  sku: {
    name: 'Standard_LRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}

resource fileShare 'Microsoft.Storage/storageAccounts/fileServices/shares@2024-11-01' = {
  name: '${storageAcct.name}/default/vmshare'
  properties: {}
}

resource nsg 'Microsoft.Network/networkSecurityGroups@2024-11-01' = {
  name: '${vmssName}-nsg'
  location: location
  properties: {
    securityRules: [
      {
        name: 'Allow-SSH'
        properties: {
          priority: 1000
          protocol: 'Tcp'
          access: 'Allow'
          direction: 'Inbound'
          sourceAddressPrefix: '*'
          sourcePortRange: '*'
          destinationAddressPrefix: '*'
          destinationPortRange: '22'
        }
      }
    ]
  }
}

resource vmss 'Microsoft.Compute/virtualMachineScaleSets@2024-11-01' = {
  name: vmssName
  location: location
  sku: {
    name: 'Standard_ND96isr_MI300X_v5'
    tier: 'Standard'
    capacity: instanceCount
  }
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    upgradePolicy: {
      mode: 'Manual'
    }
    virtualMachineProfile: {
      storageProfile: {
        imageReference: {
          publisher: 'microsoft-dsvm'
          offer: 'ubuntu-hpc'
          sku: '2204-rocm'
          version: 'latest'
        }
        osDisk: {
          createOption: 'FromImage'
        }
      }
      diagnosticsProfile: {
        bootDiagnostics: {
          enabled: true
          storageUri: storageAcct.properties.primaryEndpoints.blob
        }
      }
      osProfile: {
        computerNamePrefix: vmssName
        adminUsername: adminUsername
        linuxConfiguration: {
          disablePasswordAuthentication: true
          ssh: {
            publicKeys: [
              {
                path: '/home/${adminUsername}/.ssh/authorized_keys'
                keyData: sshPublicKey
              }
            ]
          }
        }
        customData: base64('#cloud-config\nruncmd:\n  - curl -s "${initScriptUrl}" -o /tmp/init.sh\n  - sed -i "s|__STORAGE_ACCOUNT__|${storageAcct.name}|g" /tmp/init.sh\n  - sed -i "s|__STORAGE_KEY__|${listKeys(storageAcct.id, storageAcct.apiVersion).keys[0].value}|g" /tmp/init.sh\n  - bash /tmp/init.sh')
      }
      networkProfile: {
        networkInterfaceConfigurations: [
          {
            name: '${vmssName}-nic'
            properties: {
              primary: true
              networkSecurityGroup: {
                id: nsg.id
              }
              ipConfigurations: [
                {
                  name: '${vmssName}-ipconfig'
                  properties: {
                    subnet: {
                      id: resourceId('Microsoft.Network/virtualNetworks/subnets', 'myVnet', 'default')
                    }
                    publicIPAddressConfiguration: {
                      name: '${vmssName}-pip'
                      properties: {
                        idleTimeoutInMinutes: 10
                      }
                    }
                  }
                }
              ]
            }
          }
        ]
      }
    }
    overprovision: true
  }
}

resource vnet 'Microsoft.Network/virtualNetworks@2024-05-01' = {
  name: 'myVnet'
  location: location
  properties: {
    addressSpace: {
      addressPrefixes: [
        '10.0.0.0/16'
      ]
    }
    subnets: [
      {
        name: 'default'
        properties: {
          addressPrefix: '10.0.0.0/24'
        }
      }
    ]
  }
}
```
---

## Summary and Documentation of Initialization Script (`mi300x-cloudinit.sh`)

This bash-based cloud-init script is executed at first boot of each VMSS instance. It ensures the necessary environment and connectivity setup are completed:

* Logs VM initialization timestamps and configuration details to `/var/log/cloud-init.log`.
* Installs dependencies (`cifs-utils`) for mounting Azure File Shares.
* Dynamically generates SMB credentials file securely.
* Mounts an Azure File Share (`vmshare`) on each VM to enable shared storage access, facilitating collaboration or shared workloads.


## Example CloudInit

```bash
#!/bin/bash

echo "=== CLOUD INIT START ===" >> /var/log/cloud-init.log
echo "VM initialized at $(date)" >> /var/log/cloud-init.log
echo "Hello from cloud-init!" >> /var/log/cloud-init.log
echo "Storage Acct: __STORAGE_ACCOUNT__" >> /var/log/cloud-init.log
# These values are substituted via Bicep using `sed`
STORAGE_ACCOUNT=__STORAGE_ACCOUNT__
STORAGE_KEY=__STORAGE_KEY__

# Install necessary tools
apt-get update
apt-get install -y cifs-utils

# Mount Azure File Share
mkdir -p /mnt/vmshare
mkdir -p /etc/smbcredentials

# Create credentials file
cat <<EOF > /etc/smbcredentials/${STORAGE_ACCOUNT}.cred
username=${STORAGE_ACCOUNT}
password=${STORAGE_KEY}
EOF

chmod 600 /etc/smbcredentials/${STORAGE_ACCOUNT}.cred

# Add to /etc/fstab
echo "//${STORAGE_ACCOUNT}.file.core.windows.net/vmshare /mnt/vmshare cifs nofail,vers=3.0,credentials=/etc/smbcredentials/${STORAGE_ACCOUNT}.cred,dir_mode=0777,file_mode=0777,serverino" >> /etc/fstab

# Mount file share
mount -a

echo "=== CLOUD INIT END ===" >> /var/log/cloud-init.log
```
---

## Deploying the Bicep Template

### Prerequisites

* **Azure CLI** installed (version 2.30.0 or later).
* Logged in to Azure:

  ```bash
  az login
  ```
* (Optional) Set the right subscription if you have multiple:

  ```bash
  az account set --subscription <YOUR_SUBSCRIPTION_ID>
  ```

### 1. Create the Resource Group

Before you deploy the VMSS you must have a resource group:

```bash
az group create \
  --name myResourceGroup \
  --location francecentral
```

This will create (or confirm) a resource group named `myResourceGroup` in the **francecentral** region.

### 2. Deploy the VMSS via Bicep

With your RG in place, deploy the template:

```bash
az deployment group create \
  --resource-group myResourceGroup \
  --template-file mi300x-vmss.bicep \
  --parameters \
      sshPublicKey="$(cat ~/.ssh/id_rsa.pub)" \
      instanceCount=16 \
      adminUsername=azureuser \
      # (Optional) override init script URL:
      # initScriptUrl="https://path/to/your-cloudinit.sh"
```

* **sshPublicKey**: Reads your local public key for VM SSH access.
* **instanceCount**: Number of VM instances in the scale set.
* **adminUsername**: Linux administrator user name.
* **initScriptUrl**: URL to the cloud-init script (if you’ve forked or customized it).

Once complete, Azure will provision the storage account, file share, VNet, NSG, and VM Scale Set as defined in `mi300x-vmss.bicep`.

---



### Next Steps and Further Learning

For further refinement of this implementation, explore advanced scenarios like automatic scaling based on custom metrics, integration with Azure Monitor, or continuous delivery pipelines.

Refer to:

* [Virtual Machine Scale Set Monitoring](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/vm-scale-sets-monitor)
* [Advanced Networking for VMSS](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-networking)

---
