---
title: Disaster Recovery & Business Continuity
parent: Docs
nav_order: 11
---

# Documentation: Disaster Recovery & Business Continuity

This document provides further details and context for implementing disaster recovery and business continuity strategies for your Azure workloads.

- [ ] **Define RPO and RTO for each workload**

*   **Why:** Recovery Point Objective (RPO) defines the maximum acceptable amount of data loss measured in time, while Recovery Time Objective (RTO) defines the maximum acceptable downtime. Without clearly defined RPO and RTO targets for each workload, you cannot design appropriate backup and recovery strategies — and you risk either over-investing in protection for non-critical systems or under-protecting business-critical ones.
*   **How:** Work with business stakeholders to classify workloads by criticality. For each workload, determine the RPO (how much data loss is tolerable) and RTO (how quickly the workload must be restored). Document these targets and use them to drive decisions about backup frequency, replication strategy, and recovery architecture.
*   **Resources:**
    *   [Business continuity management in Azure](https://learn.microsoft.com/en-us/azure/reliability/business-continuity-management-program)
    *   [Recommendations for defining reliability targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics)

- [ ] **Implement Azure Backup for critical resources**

*   **Why:** Azure Backup provides a simple, secure, and cost-effective solution to back up your data and recover it from the Microsoft Azure cloud. Without proper backups, accidental deletion, ransomware, or corruption events can lead to permanent data loss with no recovery path.
*   **How:** Create a Recovery Services vault in each region where you have critical workloads. Configure backup policies that align with your defined RPO targets. Enable backup for Azure VMs, SQL databases, Azure Files, blob storage, and other supported workloads. Monitor backup health through Azure Monitor and configure alerts for backup failures.
*   **Resources:**
    *   [What is Azure Backup?](https://learn.microsoft.com/en-us/azure/backup/backup-overview)
    *   [Azure Backup architecture and components](https://learn.microsoft.com/en-us/azure/backup/backup-architecture)
    *   [Azure Backup best practices](https://learn.microsoft.com/en-us/azure/backup/guidance-best-practices)
*   **Quick check:** Find VMs without backup protection using Azure Resource Graph:
    ```bash
    az graph query -q "RecoveryServicesResources \
      | where type =~ 'microsoft.recoveryservices/vaults/backupfabrics/protectioncontainers/protecteditems' \
      | where properties.backupManagementType == 'AzureIaasVM' \
      | project vmId=tolower(properties.sourceResourceId) \
      | join kind=rightanti (Resources | where type =~ 'microsoft.compute/virtualmachines' \
        | project vmId=tolower(id), name, resourceGroup) on vmId" -o table
    ```
    Use [Azure Policy](https://learn.microsoft.com/en-us/azure/backup/backup-azure-auto-enable-backup) to auto-enable backup on new VMs.

- [ ] **Design for geo-redundancy with Azure Site Recovery**

*   **Why:** Azure Site Recovery (ASR) enables disaster recovery orchestration across Azure regions, ensuring your workloads can fail over to a secondary region when a regional outage occurs. For digital-native companies, regional outages — while rare — can have severe business impact without a pre-configured recovery strategy.
*   **How:** Identify workloads that require cross-region disaster recovery based on your RTO and RPO targets. Set up Azure Site Recovery to replicate Azure VMs and their associated resources (managed disks, networking, storage) to a target recovery region. Configure recovery plans that define the failover sequence and any pre/post scripts needed for consistent application recovery.
*   **Resources:**
    *   [About Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-overview)
    *   [Set up disaster recovery for Azure VMs](https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-enable-replication)
    *   [Recovery plans in Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/recovery-plan-overview)

- [ ] **Test your disaster recovery plan regularly**

*   **Why:** A disaster recovery plan that has never been tested is an assumption, not a plan. Testing validates that your failover procedures work as expected, that your RPO and RTO targets are achievable, and that your team knows how to execute the recovery process under pressure. Untested DR plans frequently fail when needed most.
*   **How:** Use Azure Site Recovery test failovers to validate your DR plan without impacting production workloads. Schedule regular DR drills (at least quarterly) and involve all relevant teams. Document the results of each test, including any issues encountered and the actual recovery times achieved. Update your DR plan based on test findings.
*   **Resources:**
    *   [Run a disaster recovery drill to Azure](https://learn.microsoft.com/en-us/azure/site-recovery/azure-to-azure-tutorial-dr-drill)
    *   [Recommendations for designing a disaster recovery strategy](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery)

- [ ] **Leverage availability zones and paired regions**

*   **Why:** Azure availability zones are physically separate locations within a region that protect against datacenter-level failures, while paired regions provide built-in cross-region redundancy with prioritized recovery during broad outages. Understanding and leveraging both is essential for designing high-availability and disaster-resilient architectures.
*   **How:** Deploy critical workloads across availability zones within a region for high availability (protecting against datacenter failures). For disaster recovery, replicate workloads to a paired region. Use zone-redundant services (such as zone-redundant storage, zone-redundant SQL Database, and zone-redundant AKS) wherever available. Factor region pair characteristics into your DR planning.
*   **Resources:**
    *   [Azure regions and availability zones](https://learn.microsoft.com/en-us/azure/reliability/availability-zones-overview)
    *   [Azure cross-region replication](https://learn.microsoft.com/en-us/azure/reliability/cross-region-replication-azure)
    *   [Reliability in Azure](https://learn.microsoft.com/en-us/azure/reliability/overview)

- [ ] **Implement PaaS disaster recovery patterns**

*   **Why:** PaaS services have different DR mechanisms than IaaS. While Azure Site Recovery handles VM replication, PaaS services like Azure SQL, Cosmos DB, App Service, and Storage each have their own built-in geo-redundancy and failover capabilities that must be configured individually.
*   **How:** Use active geo-replication and auto-failover groups for Azure SQL Database to automatically replicate and fail over databases across regions. Configure multi-region writes in Cosmos DB for globally distributed data with automatic failover. Deploy zone-redundant App Service plans for in-region high availability, and pair with Azure Front Door for global traffic routing and cross-region failover. Use geo-redundant storage (GRS) or geo-zone-redundant storage (GZRS) for blob and file data so that storage is replicated to a paired region automatically.
*   **Resources:**
    *   [Active geo-replication for Azure SQL Database](https://learn.microsoft.com/azure/azure-sql/database/active-geo-replication-overview)
    *   [Failover groups overview (Azure SQL Database)](https://learn.microsoft.com/azure/azure-sql/database/failover-group-sql-db)
    *   [Distribute data globally with Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/distribute-data-globally)
    *   [Multi-region App Service disaster recovery](https://learn.microsoft.com/azure/app-service/overview-disaster-recovery)
    *   [Azure Storage redundancy](https://learn.microsoft.com/azure/storage/common/storage-redundancy)
    *   [What is Azure Front Door?](https://learn.microsoft.com/azure/frontdoor/front-door-overview)
