---
nav_exclude: true
---

# Documentation: Infrastructure as Code (IaC)

This document provides further details and context for the Infrastructure as Code (IaC) section of the Azure Startup Checklist.

- [ ] **Adopt an IaC tool (Bicep, ARM Templates, Terraform)**

*   **Why:** Manually configuring infrastructure through the Azure portal (often called "click-ops") is error-prone, slow, and difficult to replicate consistently. IaC allows you to define your infrastructure in code, enabling automation, version control, consistency, and repeatability.
*   **How:** Choose an IaC tool that fits your team's skills and preferences:
    *   **Bicep:** A domain-specific language (DSL) for Azure Resource Manager (ARM) templates, offering simpler syntax and improved authoring experience compared to JSON ARM templates.
    *   **ARM Templates:** The native JSON-based format for declaring Azure resources.
    *   **Terraform:** A popular open-source IaC tool from HashiCorp with broad cloud provider support, including Azure.
    Store your IaC code in a version control system (like Git).
*   **Resources:**
    *   [What is Infrastructure as Code?](https://learn.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code)
    *   [What is Bicep?](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview)
    *   [What are ARM templates?](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/overview)
    *   [Terraform on Azure documentation](https://learn.microsoft.com/en-us/azure/developer/terraform/)

- [ ] **Integrate IaC into CI/CD pipelines**

*   **Why:** Automating infrastructure deployments through Continuous Integration/Continuous Deployment (CI/CD) pipelines ensures that changes are tested, validated, and deployed consistently, reducing manual effort and risk.
*   **How:** Use tools like Azure DevOps Pipelines or GitHub Actions to create pipelines that lint, validate, plan (for Terraform), and apply your IaC code to deploy or update Azure resources automatically upon code commits or merges.
*   **Resources:**
    *   [Integrate Bicep with Azure Pipelines](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/add-template-to-azure-pipelines)
    *   [Integrate ARM templates with Azure Pipelines](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/add-template-to-azure-pipelines)
    *   [Use Terraform in Azure Pipelines](https://learn.microsoft.com/en-us/azure/developer/terraform/terraform-deploy-azure-pipelines)
    *   [Deploy Bicep files by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-github-actions)
    *   [Deploy ARM templates by using GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/templates/deploy-github-actions)
    *   [Deploy Terraform using GitHub Actions](https://learn.microsoft.com/en-us/azure/developer/terraform/deploy-terraform-github-actions)

- [ ] **Consider Azure Landing Zones**

*   **Why:** Azure Landing Zones provide a prescriptive architectural approach, based on Cloud Adoption Framework principles, to set up your Azure environment with foundational capabilities for identity, governance, security, networking, and operations at scale. Even for startups, adopting Landing Zone concepts early can establish a solid foundation for future growth.
*   **How:** Review the Azure Landing Zone conceptual architecture and implementation options. Start with a basic implementation tailored to your needs, focusing on core areas like subscription organization, identity, and basic governance (e.g., using Azure Policy for tagging).
*   **Resources:**
    *   [What is an Azure landing zone?](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
    *   [Azure Landing Zone design principles](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-principles)
    *   [Implement Cloud Adoption Framework Azure landing zones](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/implementation-options)

