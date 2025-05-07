---
nav_exclude: true
---

# Documentation: Resource Management & Organization

This document provides further details and context for the Resource Management & Organization section of the Azure Startup Checklist.

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

