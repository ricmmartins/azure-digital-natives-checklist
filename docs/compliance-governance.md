---
title: Compliance & Governance
parent: Docs
nav_order: 13
---

# Documentation: Compliance & Governance

This document provides further details and context for implementing compliance and governance practices across your Azure environment.

- [ ] **Implement Azure Policy for guardrails**

*   **Why:** Without guardrails, teams may deploy resources that violate organizational standards—such as using unapproved regions, skipping encryption, or deploying oversized SKUs. Azure Policy lets you enforce rules at scale, preventing non-compliant resources from being created and continuously auditing existing resources for drift.
*   **How:** Start with built-in policy definitions that cover common requirements such as allowed resource locations, required tags, and enforced encryption. Assign policies at the management group or subscription level. Use "Deny" effect for hard guardrails and "Audit" effect for visibility without blocking. Group related policies into initiatives for easier management and reporting.
*   **Resources:**
    *   [What is Azure Policy?](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
    *   [Azure Policy built-in policy definitions](https://learn.microsoft.com/en-us/azure/governance/policy/samples/built-in-policies)
    *   [Tutorial: Create and manage policies to enforce compliance](https://learn.microsoft.com/en-us/azure/governance/policy/tutorials/create-and-manage)
    *   [Azure Policy best practices](https://learn.microsoft.com/en-us/azure/governance/policy/overview)
*   **Quick check:** Find storage accounts with public blob access enabled:
    ```bash
    az graph query -q "Resources | where type =~ 'microsoft.storage/storageaccounts' \
      | where properties.allowBlobPublicAccess != false \
      | project name, resourceGroup, subscriptionId" -o table
    ```
    Use the built-in policy *"Storage accounts should disable public network access"* for continuous enforcement.

- [ ] **Organize resources with Management Groups**

*   **Why:** As your Azure footprint grows beyond a single subscription, you need a way to apply governance consistently across all subscriptions. Management groups provide a hierarchical structure above subscriptions, allowing you to apply policies, RBAC assignments, and budgets once and have them inherited across the entire organization.
*   **How:** Design a management group hierarchy that reflects your organizational structure—for example, separate groups for production, development, and sandbox workloads. Apply policies and access controls at the appropriate management group level. Follow the Azure landing zone architecture recommendations for structuring your hierarchy.
*   **Resources:**
    *   [What are Azure management groups?](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview)
    *   [Organize your resources with Azure management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/create-management-group-portal)
    *   [Azure landing zone design area: Resource organization](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org)
    *   [CAF management group and subscription organization](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-management-groups)

- [ ] **Understand your compliance obligations**

*   **Why:** Different industries and geographies have specific regulatory requirements (SOC 2, HIPAA, GDPR, PCI DSS, FedRAMP, etc.) that dictate how data must be stored, processed, and protected. Failing to meet these obligations can result in significant legal, financial, and reputational consequences. Understanding which frameworks apply to your organization is the first step toward building a compliant cloud environment.
*   **How:** Identify the regulatory frameworks that apply to your business based on your industry, geography, and the type of data you handle. Use Microsoft's compliance offerings documentation to understand which Azure services have been certified for specific standards. Leverage Azure compliance documentation and audit reports to support your own certification efforts.
*   **Resources:**
    *   [Microsoft compliance offerings](https://learn.microsoft.com/en-us/compliance/regulatory/offering-home)
    *   [Azure compliance documentation](https://learn.microsoft.com/en-us/azure/compliance/)
    *   [Microsoft Trust Center](https://www.microsoft.com/en-us/trust-center/compliance/compliance-overview)
    *   [Shared responsibility in the cloud](https://learn.microsoft.com/en-us/azure/security/fundamentals/shared-responsibility)

- [ ] **Enable Microsoft Defender for Cloud regulatory compliance**

*   **Why:** Tracking compliance posture manually across hundreds of Azure resources is impractical. Microsoft Defender for Cloud provides a regulatory compliance dashboard that continuously assesses your environment against industry standards, highlights gaps, and provides actionable remediation recommendations.
*   **How:** Enable Microsoft Defender for Cloud's enhanced security features on your subscriptions. Add the regulatory compliance standards relevant to your organization (e.g., SOC 2, PCI DSS, HIPAA, ISO 27001). Review the compliance dashboard regularly to identify non-compliant resources and follow the built-in remediation guidance. Export compliance data for auditors and stakeholders.
*   **Resources:**
    *   [Regulatory compliance dashboard in Microsoft Defender for Cloud](https://learn.microsoft.com/en-us/azure/defender-for-cloud/regulatory-compliance-dashboard)
    *   [Microsoft Defender for Cloud overview](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)
    *   [Customize the set of standards in your regulatory compliance dashboard](https://learn.microsoft.com/en-us/azure/defender-for-cloud/update-regulatory-compliance-packages)
    *   [Microsoft cloud security benchmark](https://learn.microsoft.com/en-us/security/benchmark/azure/overview)

- [ ] **Implement data governance with Microsoft Purview**

*   **Why:** As data estates grow across databases, storage accounts, analytics platforms, and SaaS applications, it becomes difficult to understand what data you have, where it lives, how sensitive it is, and who has access to it. Without proper data governance, organizations risk regulatory violations, data breaches, and inability to derive value from their data assets.
*   **How:** Deploy Microsoft Purview to scan and catalog data sources across your Azure environment and beyond. Use automated classification to identify sensitive data types (PII, financial data, health records). Define and enforce data access policies. Track data lineage to understand how data flows through your systems. Integrate Purview with Azure services such as Azure SQL, Azure Storage, Azure Synapse Analytics, and Azure Data Lake.
*   **Resources:**
    *   [What is Microsoft Purview?](https://learn.microsoft.com/en-us/purview/purview)
    *   [Microsoft Purview data governance](https://learn.microsoft.com/en-us/purview/data-governance-overview)
    *   [Microsoft Purview Data Catalog](https://learn.microsoft.com/en-us/purview/unified-catalog)
    *   [Data classification in Microsoft Purview](https://learn.microsoft.com/en-us/purview/concept-classification)
