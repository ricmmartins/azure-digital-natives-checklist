---
nav_exclude: true
---

# Documentation: AKS & Application Architecture

This document provides further details and context for the AKS & Application Architecture section of the Azure Startup Checklist, focusing on Azure Kubernetes Service (AKS).

- [ ] **Review AKS guidance for startups**

*   **Why:** AKS simplifies deploying, managing, and scaling containerized applications using Kubernetes. Understanding core concepts and startup-specific considerations is key to leveraging it effectively.
*   **How:** Familiarize yourself with AKS features, pricing, and common architectural patterns relevant to startups.
*   **Resources:**
    *   [Azure Kubernetes Service (AKS) documentation](https://learn.microsoft.com/en-us/azure/aks/)
    *   [AKS baseline architecture](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks/baseline-aks)
    *   *(From article)* [AKS Guide for Startups](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-kubernetes-service-%E2%80%93-a-friendly-guide-for-startups/4374796)

## [ ] Plan AKS storage, upgrades, identity, and cluster models

*   **Why:** These are fundamental aspects of your AKS cluster that impact performance, cost, security, and manageability.
*   **How:**
    *   **Storage:** Choose appropriate storage options (Azure Disks, Azure Files) based on performance, access mode (ReadWriteOnce, ReadWriteMany), and cost requirements. [Storage options for applications in AKS](https://learn.microsoft.com/en-us/azure/aks/concepts-storage)
    *   **Upgrades:** Understand the AKS upgrade process for Kubernetes versions and node images. Plan for regular upgrades to stay supported and secure. [Upgrade an AKS cluster](https://learn.microsoft.com/en-us/azure/aks/upgrade-cluster)
    *   **Identity:** Integrate AKS with Microsoft Entra ID for user authentication and Kubernetes RBAC. Use Managed Identities for AKS cluster components and application pods to access other Azure resources securely. [AKS integration with Microsoft Entra ID](https://learn.microsoft.com/en-us/azure/aks/managed-aad), [Use managed identities in AKS](https://learn.microsoft.com/en-us/azure/aks/use-managed-identity)
    *   **Cluster Models:** Understand node pools (system vs. user), virtual nodes (for serverless containers), and availability zones for high availability. [Core Kubernetes infrastructure concepts in AKS](https://learn.microsoft.com/en-us/azure/aks/concepts-clusters-workloads)
*   **Resources:** *(Links included above)*
*   *(From article links for [storage](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/from-zero-to-hero-mastering-storage-in-azure-kubernetes-service-aks/4397734), [upgrades](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/embracing-aks-built-in-upgrade-features-and-exploring-custom-solutions/4398230), [identity](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/from-zero-to-hero-with-identity-and-access-control-in-azure-kubernetes-service/4386350), [cluster models](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/aks-standard-vs-aks-automatic-a-comprehensive-comparison/4264516))*
    

## [ ] Integrate AKS with Azure Monitor

*   **Why:** Monitoring your cluster and containerized applications is crucial for troubleshooting, performance tuning, and understanding resource consumption.
*   **How:** Enable Azure Monitor Container Insights for your AKS cluster. This collects metrics and logs from controllers, nodes, and containers, providing rich visualizations and alerting capabilities.
*   **Resources:**
    *   [Azure Monitor Container Insights overview](https://learn.microsoft.com/en-us/azure/azure-monitor/containers/container-insights-overview)
    *   [Enable Container Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/containers/container-insights-enable-aks)

## [ ] Follow AKS best practices

*   **Why:** Adhering to recommended practices helps ensure your AKS environment is secure, reliable, scalable, and cost-effective.
*   **How:** Review and implement best practices across various areas including cluster security, networking, storage, scheduling, multi-tenancy, and business continuity/disaster recovery (BCDR).
*   **Resources:**
    *   [Best practices for cluster operators and application developers in AKS](https://learn.microsoft.com/en-us/azure/aks/best-practices)
    *   [AKS Well-Architected Framework review](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/azure-kubernetes-service)

