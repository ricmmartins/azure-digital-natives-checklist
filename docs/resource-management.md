---
title: Resource Management
parent: Docs
nav_order: 3
---

# Documentation: Resource Management & Organization

This document provides further details and context for the Resource Management & Organization section of the Azure Digital Natives Guide.

- [ ] **Define and follow a resource organization strategy**

*   **Why:** A clear hierarchy (Management Groups -> Subscriptions -> Resource Groups) provides structure for applying policies (Azure Policy), managing access (RBAC), organizing costs, and simplifying resource discovery. Without it, environments quickly become chaotic and difficult to manage.
*   **How:**
    *   **Management Groups:** Group subscriptions based on business units, geographical regions, or application lifecycle environments (e.g., Prod, Dev, Sandbox). Apply policies and RBAC at higher levels for inheritance.
    *   **Subscriptions:** Use subscriptions as a unit of management, billing, and scale. Consider separating Production, Development/Testing, and Shared Services into different subscriptions.
    *   **Resource Groups:** Group resources with a common lifecycle, application boundary, or deployment unit within a subscription. Resources can only exist in one resource group.
*   **Resources:**
    *   [Azure Cloud Adoption Framework: Organize your resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org)
    *   [What are Azure management groups?](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)
    *   [Azure subscription and service limits, quotas, and constraints](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits) (Understand subscription boundaries)
    *   [Azure Resource Manager overview](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/overview) (Resource Groups)

- [ ] **Implement a consistent tagging strategy**

*   **Why:** Tags are key-value pairs that add metadata to Azure resources. They are essential for cost allocation, automation, resource filtering, security boundary definition, and operational management. Inconsistent or missing tags make these tasks difficult or impossible.
*   **How:** Define a mandatory and recommended set of tags for your organization. Common tags include:
    *   `Environment` (e.g., `prod`, `dev`, `staging`, `qa`)
    *   `ApplicationName` or `ServiceName`
    *   `CostCenter` or `BusinessUnit`
    *   `Owner` or `Team`
    *   `ProjectCode`
    *   `DataClassification` (e.g., `confidential`, `public`)
    Use Azure Policy to enforce tagging requirements (e.g., require specific tags, audit for missing tags).
*   **Resources:**
    *   [Use tags to organize your Azure resources and management hierarchy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-tagging)
    *   [Azure Policy overview](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
    *   [Common policy examples for tagging](https://learn.microsoft.com/en-us/azure/governance/policy/samples/pattern-tags)
*   **Quick check:** Audit a resource group for missing tags:
    ```bash
    az resource list -g MyResourceGroup -o json | jq '[.[] | select(.tags.CostCenter == null)] | length'
    ```
    For continuous enforcement, use [Azure Policy tag rules](https://learn.microsoft.com/en-us/azure/governance/policy/samples/pattern-tags) instead of ad-hoc scripts.

- [ ] **Establish naming conventions**

*   **Why:** Consistent naming enables at-a-glance identification of a resource's type, workload, environment, and region. Without a naming convention, teams waste time deciphering resource purposes, and automation scripts become fragile and error-prone.
*   **How:** Define a naming convention that includes the resource type abbreviation, workload or application name, environment, Azure region, and an instance number (e.g., `rg-app-prod-eastus-001`, `st-app-prod-eastus-001`). Use the Azure Cloud Adoption Framework's recommended abbreviations as a starting point. Enforce naming rules using Azure Policy to deny resource creation that does not match the convention.
*   **Resources:**
    *   [Define your naming convention](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-naming)
    *   [Abbreviation recommendations for Azure resources](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/azure-best-practices/resource-abbreviations)

- [ ] **Apply resource locks to protect critical resources**

*   **Why:** Accidental deletion or modification of production resources — such as a database, virtual network, or resource group — can cause severe outages and data loss. Resource locks provide a safety net that prevents destructive actions regardless of RBAC permissions.
*   **How:** Apply **CanNotDelete** locks on all production resource groups to prevent accidental deletion while still allowing updates. Apply **ReadOnly** locks on critical infrastructure resources like hub virtual networks, DNS zones, and ExpressRoute circuits where unplanned modifications could cause cascading failures. Automate lock verification with Azure Policy to ensure locks are consistently applied. Document the process for temporarily removing locks during planned maintenance.
*   **Resources:**
    *   [Lock your Azure resources to protect your infrastructure](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/lock-resources)
*   **Quick check:** Verify a production resource group has a CanNotDelete lock:
    ```bash
    az lock list -g MyProductionRG --query "[?level=='CanNotDelete']" -o table
    ```

- [ ] **Use Azure Resource Graph for at-scale querying**

*   **Why:** As your Azure environment grows across multiple subscriptions, you need the ability to query and analyze resources at scale efficiently. Azure Resource Graph enables fast, complex queries across your entire estate without needing to call each resource provider individually.
*   **How:** Use Resource Graph queries to build resource inventories, check compliance posture, identify orphaned or misconfigured resources, and perform cost analysis. Integrate Resource Graph queries with Azure Workbooks for interactive dashboards and reports. Use the Resource Graph Explorer in the Azure portal for ad-hoc queries, and the Azure CLI or PowerShell for automation.
*   **Resources:**
    *   [What is Azure Resource Graph?](https://learn.microsoft.com/en-us/azure/governance/resource-graph/overview)
    *   [Understanding the Azure Resource Graph query language](https://learn.microsoft.com/en-us/azure/governance/resource-graph/concepts/query-language)
    *   [Starter Resource Graph query samples](https://learn.microsoft.com/en-us/azure/governance/resource-graph/samples/starter)

- [ ] **Monitor subscription limits and quotas**

*   **Why:** Azure enforces per-subscription limits on resources such as vCPU cores, public IP addresses, storage accounts, and network interfaces. Hitting these limits during a scaling event or deployment can block critical operations and cause outages if not planned for in advance.
*   **How:** Regularly review Azure subscription limits relevant to your workloads. Monitor quota usage through the Azure portal's Quotas page, and set up alerts for when usage approaches thresholds. For large workloads, design a multi-subscription architecture to distribute resources across subscription boundaries. Use the Azure Quotas API for programmatic checks and integrate quota monitoring into your CI/CD pipelines.
*   **Resources:**
    *   [Azure subscription and service limits, quotas, and constraints](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/azure-subscription-service-limits)
    *   [Azure Quotas overview](https://learn.microsoft.com/en-us/azure/quotas/quotas-overview)

- [ ] **Organize subscriptions with management groups**

*   **Why:** Enterprises with multiple subscriptions need a hierarchical governance structure to consistently apply policies, access controls, and compliance requirements across the organization. Without management groups, governance must be configured subscription-by-subscription, leading to inconsistencies and administrative overhead.
*   **How:** Design a management group hierarchy aligned to your business structure — for example, by business unit, environment (Production, Non-Production, Sandbox), or regulatory boundary. Apply Azure Policy at management group scope so that policies are inherited by all child subscriptions and resource groups. Assign RBAC roles at the management group level for broad access governance. Keep the hierarchy to no more than six levels of depth for manageability.
*   **Resources:**
    *   [What are Azure management groups?](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)
    *   [Management groups — Cloud Adoption Framework](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups)

---

## 📚 Recommended Reading

- [Introducing the Startup Scale Landing Zone: Get Azure Right from Day One](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/introducing-the-startup-scale-landing-zone-get-azure-right-from-day-one/4501566) — Purpose-built landing zone architecture for startups scaling on Azure
- [From Zero to Hero with Azure Landing Zones](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/from-zero-to-hero-with-azure-landing-zones/4229195) — Complete walkthrough of landing zone concepts, design areas, and implementation paths

