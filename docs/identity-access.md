# Documentation: Identity & Access Management

This document provides further details and context for the Identity & Access Management section of the Azure Startup Checklist.

## [ ] Use Microsoft Entra ID as the single source of truth

*   **Why:** Centralizing identity management simplifies user provisioning, access control, and security policy enforcement across all your Azure resources and potentially other SaaS applications.
*   **How:** Ensure all users, service principals, and application identities are managed within a single Microsoft Entra ID tenant associated with your Azure subscriptions.
*   **Resources:**
    *   [What is Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/whatis)
    *   [Associate or add an Azure subscription to your Microsoft Entra tenant](https://learn.microsoft.com/en-us/entra/fundamentals/how-subscriptions-associated-directory)
    *   *(From article)* [Demystifying Entra Tenants and Subscriptions]() - *Need to find this link* 

## [ ] Implement Role-Based Access Control (RBAC) properly

*   **Why:** The principle of least privilege dictates granting users only the permissions necessary to perform their tasks. Over-assigning roles like "Owner" significantly increases the potential impact of compromised credentials or accidental misconfigurations.
*   **How:** Analyze the roles required for different teams and individuals (developers, operations, security, finance). Use built-in Azure roles whenever possible, and create custom roles only when necessary. Regularly review role assignments.
*   **Resources:**
    *   [What is Azure role-based access control (Azure RBAC)?](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview)
    *   [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)
    *   [Best practices for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/best-practices)

## [ ] Utilize Managed Identities

*   **Why:** Storing credentials (like connection strings, API keys, or certificates) directly in application code or configuration files is a major security risk. Managed Identities provide an Azure-managed identity for services to authenticate to other Azure services that support Microsoft Entra authentication, without needing credentials in your code.
*   **How:** Enable system-assigned or user-assigned managed identities for Azure resources like VMs, App Service, Functions, AKS, etc. Grant these identities appropriate RBAC roles to access other resources (e.g., Key Vault, Storage Account, SQL Database).
*   **Resources:**
    *   [What are managed identities for Azure resources?](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)
    *   [Azure services that support managed identities](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/services-support-managed-identities)
    *   *(From article)* [From Zero to Hero: Identity in AKS]() - *Need to find this link*

## [ ] Enable Privileged Identity Management (PIM)

*   **Why:** PIM provides time-based and approval-based role activation to mitigate the risks associated with excessive privileged access permissions. It allows users to request elevation to privileged roles only when needed and for a limited duration.
*   **How:** Identify critical roles (e.g., Global Administrator, Subscription Owner, Contributor). Configure these roles in PIM to require activation, potentially with justification or approval workflows. Regularly audit PIM activity.
*   **Resources:**
    *   [What is Microsoft Entra Privileged Identity Management?](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure)
    *   [Assign Azure AD roles in Privileged Identity Management](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-assign-azure-ad-role)
    *   [Assign Azure resource roles in Privileged Identity Management](https://learn.microsoft.com/en-us/azure/role-based-access-control/privileged-identity-management/pim-resource-roles-assign-roles)

