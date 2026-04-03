---
title: VM Scale Sets
parent: Compute & Apps
grand_parent: Docs
nav_order: 3
description: Azure VMSS orchestration modes, autoscaling policies, image management, health monitoring, networking, security hardening, and cost optimization.
---

# Documentation: VM Scale Sets

This document provides guidance for deploying and managing Azure Virtual Machine Scale Sets (VMSS) following the Azure Digital Natives Guide.

- [ ] **Virtual Machine Scale Sets Overview**

*   **Why:** Auto-scaling groups of identical VMs reduce cost during low demand and improve availability during spikes, without manual intervention.
*   **How:** Choose between Uniform and Flexible orchestration modes. Flexible mode is recommended for most new workloads — it supports mixed VM sizes, availability zones, and standard VM APIs. Uniform mode remains available for workloads requiring tight homogeneity. Distribute instances across availability zones for high availability.
*   **Resources:**
    *   [Virtual Machine Scale Sets overview](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/overview)
    *   [Orchestration modes for Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-orchestration-modes)

- [ ] **Auto-Scaling Configuration**

*   **Why:** Manual scaling either wastes money on idle capacity or causes outages when demand exceeds provisioned resources.
*   **How:** Configure metric-based autoscale rules using CPU, memory, or custom metrics. Set scale-out thresholds (e.g., CPU > 70%) and scale-in thresholds (e.g., CPU < 30%) with cooldown periods to prevent flapping. Use schedule-based rules for known traffic patterns and predictive autoscale for workloads with cyclical usage.
*   **Resources:**
    *   [Get started with autoscale in Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-get-started)
    *   [Autoscale best practices](https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-best-practices)
    *   [Predictive autoscale for Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/azure-monitor/autoscale/autoscale-predictive)

- [ ] **Image Management**

*   **Why:** Inconsistent or unpatched images across instances cause configuration drift and security vulnerabilities.
*   **How:** Use Azure Compute Gallery to store and distribute golden images across regions and subscriptions. Automate image builds with Azure Image Builder to produce hardened, tested images on a schedule. Enable automatic OS image upgrades with a rolling upgrade policy to keep instances patched without downtime.
*   **Resources:**
    *   [Azure Compute Gallery overview](https://learn.microsoft.com/en-us/azure/virtual-machines/azure-compute-gallery)
    *   [Azure Image Builder overview](https://learn.microsoft.com/en-us/azure/virtual-machines/image-builder-overview)
    *   [Automatic OS image upgrades for scale sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-automatic-upgrade)

- [ ] **Health Monitoring and Repair**

*   **Why:** Unhealthy instances that remain in the pool serve bad traffic and degrade user experience.
*   **How:** Configure the Application Health extension to monitor HTTP endpoints or TCP ports on each instance. Alternatively, use load balancer health probes. Enable automatic instance repairs with an appropriate grace period so that failed instances are automatically deleted and replaced.
*   **Resources:**
    *   [Application Health extension for Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-health-extension)
    *   [Automatic instance repairs for scale sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-automatic-instance-repairs)

- [ ] **Security Best Practices**

*   **Why:** Scale set instances are high-value targets — a single misconfiguration is replicated across every instance in the set.
*   **How:** Use Managed Identity for all Azure service authentication — never embed credentials in customData or scripts. Place instances on private subnets behind a load balancer or application gateway with no public IPs. Apply Network Security Groups to restrict inbound and outbound traffic. Enable Azure Disk Encryption for data-at-rest protection.
*   **Resources:**
    *   [Assign a managed identity to a Virtual Machine Scale Set](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/qs-configure-cli-windows-vmss)
    *   [Networking for Virtual Machine Scale Sets](https://learn.microsoft.com/en-us/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-networking)
    *   [Architecture best practices for VMs and scale sets](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/virtual-machines)

- [ ] **Cost Optimization**

*   **Why:** Scale sets running large VM SKUs can become expensive quickly, especially when overprovisioned.
*   **How:** Use Azure Spot VMs for fault-tolerant or batch workloads at significant discounts. Right-size VM SKUs based on actual utilization data from Azure Monitor. Configure scale-in rules to reduce to minimum capacity during off-peak hours. Purchase Azure Reservations or Savings Plans for predictable baseline capacity.
*   **Resources:**
    *   [Use Azure Spot Virtual Machines](https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms)
    *   [What are Azure Reservations?](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations)

---

## 📚 Recommended Reading

- [Azure Capacity Planning Using Quotas, Reservations, VMSS Instance Mix, and Compute Fleet](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-capacity-planning-using-quotas-reservations-vmss-instance-mix-and-compute-/4464893) — Deep dive into capacity planning strategies including instance mix and fleet management