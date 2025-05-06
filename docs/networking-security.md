---
nav_exclude: true
---

# Documentation: Networking & Security

This document provides further details and context for the Networking & Security section of the Azure Startup Checklist.

## [ ] Design VNets, Subnets, and Network Security Groups (NSGs) thoughtfully

*   **Why:** A well-designed network foundation is critical for security, performance, and scalability. Poor planning can lead to complex rework later.
*   **How:** Define address spaces that don't overlap with on-premises or other cloud networks. Segment workloads into appropriate subnets (e.g., web tier, app tier, data tier). Use NSGs to filter traffic between subnets and to/from the internet/on-premises, applying the principle of least privilege.
*   **Resources:**
    *   [Azure Virtual Network concepts and best practices](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices)
    *   [Network security groups](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)

## [ ] Plan VNet architecture early

*   **Why:** Even simple deployments benefit from considering future needs like VNet peering, VPN/ExpressRoute connectivity, and hub-spoke topologies. Planning avoids costly re-architecting.
*   **How:** Consider if you'll need connectivity between multiple VNets (peering) or to on-premises networks (VPN Gateway/ExpressRoute). Evaluate if a hub-spoke model makes sense for centralizing shared services (like firewalls or domain controllers).
*   **Resources:**
    *   [Plan virtual networks](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-guide)
    *   [Hub-spoke network topology in Azure](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke)

## [ ] Enable Microsoft Defender for Cloud

*   **Why:** Defender for Cloud provides security posture management and threat detection across your Azure (and potentially hybrid/multi-cloud) resources. The free tier offers valuable security recommendations and assessments.
*   **How:** Enable Defender for Cloud at the subscription level. Review the Secure Score and implement recommendations. Consider enabling enhanced security features (paid tier) for advanced threat detection and protection for specific resource types (VMs, Storage, SQL, etc.).
*   **Resources:**
    *   [What is Microsoft Defender for Cloud?](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)
    *   [Enable Defender for Cloud on your Azure subscriptions](https://learn.microsoft.com/en-us/azure/defender-for-cloud/enable-defender-for-cloud)

## [ ] Deploy Azure Firewall and DDoS Protection where appropriate

*   **Why:** Azure Firewall provides centralized network traffic filtering (L3-L7) for your VNets. Azure DDoS Protection (Standard tier) offers enhanced mitigation against volumetric and protocol-based DDoS attacks beyond the basic infrastructure protection.
*   **How:** Consider deploying Azure Firewall in a central hub VNet to inspect traffic entering/leaving your Azure environment or between spokes. Evaluate the need for DDoS Protection Standard based on the criticality and public exposure of your applications.
*   **Resources:**
    *   [What is Azure Firewall?](https://learn.microsoft.com/en-us/azure/firewall/overview)
    *   [Azure DDoS Protection Standard overview](https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview)

## [ ] Minimize public IP exposure

*   **Why:** Every public IP address represents a potential attack surface. Limiting public exposure reduces risk.
*   **How:** Use Private Endpoints to securely connect to PaaS services (Storage, SQL DB, Key Vault, etc.) over the Azure private network. Use Service Endpoints for specific services where Private Endpoints aren't needed or available. Place resources like VMs behind load balancers or Application Gateways instead of assigning them direct public IPs where possible.
*   **Resources:**
    *   [What is Azure Private Endpoint?](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview)
    *   [Virtual Network service endpoints](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview)

## [ ] Secure secrets with Azure Key Vault and Managed Identities

*   **Why:** Key Vault provides a secure, centralized store for application secrets, keys, and certificates. Combining it with Managed Identities allows Azure services to access Key Vault securely without needing credentials stored in code.
*   **How:** Store connection strings, API keys, certificates, etc., in Azure Key Vault. Grant Managed Identities of your applications (e.g., App Service, Functions, VMs) access permissions (Get Secrets, etc.) to the Key Vault using access policies or Azure RBAC for Key Vault.
*   **Resources:**
    *   [About Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
    *   [Use Key Vault references for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)
    *   [Authenticate to Key Vault using Managed Identity](https://learn.microsoft.com/en-us/azure/key-vault/general/managed-identity)
    *   *(From article)* [Building a Secure & Scalable Foundation](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/building-a-secure-and-scalable-foundation-for-your-startup-on-azure/4146456)
    *   *(From article)* [AKS Networking Guide](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/aks-networking-made-easy-your-comprehensive-guide/4398603) 

