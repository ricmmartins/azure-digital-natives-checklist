---
title: Identity & Access Management
parent: Docs
nav_order: 1
---

# Documentation: Identity & Access Management

This document provides further details and context for the Identity & Access Management section of the Azure Digital Natives Guide.

- [ ] **Use Microsoft Entra ID as the single source of truth**

*   **Why:** Centralizing identity management simplifies user provisioning, access control, and security policy enforcement across all your Azure resources and potentially other SaaS applications.
*   **How:** Ensure all users, service principals, and application identities are managed within a single Microsoft Entra ID tenant associated with your Azure subscriptions.
*   **Resources:**
    *   [What is Microsoft Entra ID?](https://learn.microsoft.com/en-us/entra/fundamentals/whatis)
    *   [Associate or add an Azure subscription to your Microsoft Entra tenant](https://learn.microsoft.com/en-us/entra/fundamentals/how-subscriptions-associated-directory)
    *   *(From article)* [Demystifying Entra Tenants and Subscriptions](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/demystifying-microsoft-entra-id-tenants-and-azure-subscriptions/4155261) 

- [ ] **Implement Role-Based Access Control (RBAC) properly**

*   **Why:** The principle of least privilege dictates granting users only the permissions necessary to perform their tasks. Over-assigning roles like "Owner" significantly increases the potential impact of compromised credentials or accidental misconfigurations.
*   **How:** Analyze the roles required for different teams and individuals (developers, operations, security, finance). Use built-in Azure roles whenever possible, and create custom roles only when necessary. Regularly review role assignments.
*   **Resources:**
    *   [What is Azure role-based access control (Azure RBAC)?](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview)
    *   [Azure built-in roles](https://learn.microsoft.com/en-us/azure/role-based-access-control/built-in-roles)
    *   [Best practices for Azure RBAC](https://learn.microsoft.com/en-us/azure/role-based-access-control/best-practices)
*   **Quick check:** Audit who has Owner role on your subscription:
    ```bash
    az role assignment list --role "Owner" --all -o table
    ```
    Use [Entra PIM](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure) to replace standing Owner assignments with just-in-time elevation.

- [ ] **Utilize Managed Identities**

*   **Why:** Storing credentials (like connection strings, API keys, or certificates) directly in application code or configuration files is a major security risk. Managed Identities provide an Azure-managed identity for services to authenticate to other Azure services that support Microsoft Entra authentication, without needing credentials in your code.
*   **How:** Enable system-assigned or user-assigned managed identities for Azure resources like VMs, App Service, Functions, AKS, etc. Grant these identities appropriate RBAC roles to access other resources (e.g., Key Vault, Storage Account, SQL Database).
*   **Resources:**
    *   [What are managed identities for Azure resources?](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)
    *   [Azure services that support managed identities](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/managed-identities-status)
    *   *(From article)* [From Zero to Hero: Identity in AKS](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/from-zero-to-hero-with-identity-and-access-control-in-azure-kubernetes-service/4386350) 

- [ ] **Enable Privileged Identity Management (PIM)**

*   **Why:** PIM provides time-based and approval-based role activation to mitigate the risks associated with excessive privileged access permissions. It allows users to request elevation to privileged roles only when needed and for a limited duration.
*   **How:** Identify critical roles (e.g., Global Administrator, Subscription Owner, Contributor). Configure these roles in PIM to require activation, potentially with justification or approval workflows. Regularly audit PIM activity.
*   **Resources:**
    *   [What is Microsoft Entra Privileged Identity Management?](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure)
    *   [Assign Microsoft Entra roles in Privileged Identity Management](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-how-to-add-role-to-user)
    *   [Assign Azure resource roles in Privileged Identity Management](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-resource-roles-assign-roles)

- [ ] **Enforce Multi-Factor Authentication (MFA)**

*   **Why:** Without MFA, a stolen or guessed password grants an attacker full access to the compromised account. Microsoft reports that MFA blocks more than 99.2% of account-compromise attacks, making it the single most impactful security control you can enable.
*   **How:** For organizations without Microsoft Entra ID P1/P2 licenses, enable Security Defaults to require MFA for all users at no extra cost. For organizations with P1/P2, create Conditional Access policies that require MFA for all users, starting with administrators and privileged roles. Prioritize phishing-resistant authentication methods such as FIDO2 security keys, Windows Hello for Business, and certificate-based authentication over SMS or voice-based MFA.
*   **Resources:**
    *   [Plan a Microsoft Entra multifactor authentication deployment](https://learn.microsoft.com/en-us/entra/identity/authentication/howto-mfa-getstarted)
    *   [Security defaults in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/fundamentals/security-defaults)
    *   [Passwordless authentication options — FIDO2 security keys](https://learn.microsoft.com/en-us/entra/identity/authentication/concept-authentication-passwordless#fido2-security-keys)

- [ ] **Configure Conditional Access Policies**

*   **Why:** Zero Trust security requires contextual access decisions — not just "does this user have the right password?" Conditional Access evaluates signals such as user identity, device health, location, client application, and sign-in risk to make real-time access decisions, ensuring that access is granted only when conditions are met.
*   **How:** Start with baseline policies: require MFA for all administrators, block legacy authentication protocols, require compliant or Microsoft Entra joined devices for access to sensitive applications, and block access from untrusted locations. Use the built-in policy templates as a starting point. Test all policies using the What If tool before enabling them in enforcement mode, and roll out with Report-only mode first.
*   **Resources:**
    *   [What is Conditional Access?](https://learn.microsoft.com/en-us/entra/identity/conditional-access/overview)
    *   [Conditional Access policy templates](https://learn.microsoft.com/en-us/entra/identity/conditional-access/concept-conditional-access-policy-common)
    *   [Troubleshoot Conditional Access policies with the What If tool](https://learn.microsoft.com/en-us/entra/identity/conditional-access/troubleshoot-conditional-access-what-if)

- [ ] **Create Break-Glass (Emergency Access) Accounts**

*   **Why:** If Conditional Access policies, MFA, or federation services experience an outage or misconfiguration, you risk locking all administrators out of your tenant. Break-glass accounts provide a fail-safe mechanism to regain access during emergencies without bypassing your overall security posture.
*   **How:** Create at least two cloud-only emergency access accounts (not federated, not tied to individual people). Exclude these accounts from ALL Conditional Access policies. Use long, complex passwords stored in a physical safe or hardware security module — never in digital form. Do not use these accounts for day-to-day operations. Configure Azure Monitor alerts to trigger whenever a break-glass account signs in, and regularly validate that the accounts work.
*   **Resources:**
    *   [Manage emergency access accounts in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/security-emergency-access)

- [ ] **Use Workload Identity Federation for external services**

*   **Why:** Service principals that use client secrets or certificates introduce security risks — secrets can leak through code repositories, logs, or configuration files, and they expire, causing service outages if not rotated. Workload Identity Federation eliminates these risks by using federated credentials that require no stored secrets.
*   **How:** For GitHub Actions workflows that deploy to Azure, configure Workload Identity Federation with an OIDC trust instead of storing Azure credentials as repository secrets. For workloads running on Kubernetes (including AKS), use Workload Identity with Kubernetes service accounts. For other external identity providers, configure federated identity credentials on your app registrations. This approach eliminates secret management overhead and reduces your attack surface.
*   **Resources:**
    *   [Workload identity federation](https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation)
    *   [Configure an app to trust an external identity provider](https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation-create-trust)

---

## 📚 Recommended Reading

- [Demystifying Microsoft Entra ID Tenants and Azure Subscriptions](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/demystifying-microsoft-entra-id-tenants-and-azure-subscriptions/4155261) — Clear breakdown of tenant vs subscription hierarchy and common identity pitfalls
- [The Comprehensive Playbook for Identity, Resource, and Billing Separation](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/the-comprehensive-playbook-for-identity-resource-and-billing-separation/4471854) — Production patterns for isolating environments, billing boundaries, and access control

