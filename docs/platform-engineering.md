---
title: Platform Engineering
parent: Docs
nav_order: 17
---

# Documentation: Platform Engineering

This document provides further details and context for building internal developer platforms on Azure. Platform engineering focuses on creating self-service capabilities that improve developer productivity while maintaining organizational standards and governance.

- [ ] **Build an Internal Developer Platform (IDP)**

*   **Why:** Developers spend significant time on infrastructure tickets, environment setup, and operational toil. An Internal Developer Platform provides self-service capabilities for provisioning infrastructure, deploying apps, and managing environments — reducing wait times and cognitive load while maintaining guardrails.
*   **How:** Identify the most common developer workflows (environment creation, deployments, access requests) and automate them behind self-service interfaces. Use Azure-native tools like Azure Deployment Environments and Azure Developer CLI as building blocks, and layer on a portal experience (such as Backstage or a custom UI) for discoverability.
*   **Resources:**
    *   [What is platform engineering?](https://learn.microsoft.com/en-us/platform-engineering/what-is-platform-engineering)
    *   [Platform engineering guides](https://learn.microsoft.com/en-us/platform-engineering/)
    *   [Azure Deployment Environments overview](https://learn.microsoft.com/en-us/azure/deployment-environments/overview-what-is-azure-deployment-environments)

- [ ] **Standardize developer environments with Azure Deployment Environments**

*   **Why:** Inconsistent development environments lead to "works on my machine" problems, onboarding delays, and configuration drift. Azure Deployment Environments lets platform teams provide pre-configured, project-specific environments that developers can spin up on demand with consistent settings.
*   **How:** Define environment definitions using infrastructure-as-code templates (ARM, Bicep, or Terraform). Configure dev centers and projects in Azure Deployment Environments, set up catalogs of approved templates, and assign appropriate permissions so developers can create environments self-service.
*   **Resources:**
    *   [Key concepts for Azure Deployment Environments](https://learn.microsoft.com/en-us/azure/deployment-environments/concept-environments-key-concepts)
    *   [Quickstart: Create and configure a dev center](https://learn.microsoft.com/en-us/azure/deployment-environments/quickstart-create-and-configure-devcenter)
    *   [Configure environment definitions](https://learn.microsoft.com/en-us/azure/deployment-environments/configure-environment-definition)

- [ ] **Implement service catalogs and golden paths**

*   **Why:** Without curated templates, teams reinvent the wheel or make inconsistent architectural choices. Golden paths — opinionated, well-supported templates and reference architectures — let developers start from proven patterns that enforce organizational standards for security, compliance, and reliability while still empowering autonomy.
*   **How:** Curate a catalog of approved application templates, infrastructure modules, and reference architectures. Publish these through your IDP or Azure Deployment Environments catalog. Include built-in observability, security baselines, and CI/CD pipelines in each template so teams get production-ready scaffolding from day one.
*   **Resources:**
    *   [Add and configure a catalog from a GitHub or Azure Repos repository](https://learn.microsoft.com/en-us/azure/deployment-environments/how-to-configure-catalog)
    *   [Azure Architecture Center — Browse architectures](https://learn.microsoft.com/en-us/azure/architecture/browse/)
    *   [Microsoft Dev Box overview](https://learn.microsoft.com/en-us/azure/dev-box/overview-what-is-microsoft-dev-box)

- [ ] **Use Azure Developer CLI (azd) for developer experience**

*   **Why:** Developers need a streamlined workflow to go from code to cloud without deep Azure expertise. The Azure Developer CLI (azd) provides a consistent, opinionated workflow for initializing, provisioning, and deploying Azure applications — reducing the gap between local development and production deployment.
*   **How:** Create azd-compatible templates (`azure.yaml` + infrastructure-as-code) for your organization's standard application patterns. Developers use `azd init` to scaffold, `azd provision` to create infrastructure, and `azd deploy` to ship code. Integrate azd into your CI/CD pipelines for consistent deployments across environments.
*   **Resources:**
    *   [What is the Azure Developer CLI?](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/overview)
    *   [Get started with the Azure Developer CLI](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/get-started)
    *   [Azure Developer CLI templates](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/azd-templates)

- [ ] **Measure platform adoption with developer experience metrics**

*   **Why:** A platform is only valuable if developers actually use it and it measurably improves their productivity. Without metrics, platform teams cannot prioritize improvements, justify investment, or identify friction points in the developer experience.
*   **How:** Track DORA metrics (deployment frequency, lead time for changes, change failure rate, time to restore service) as baseline indicators of delivery performance. Supplement with developer satisfaction surveys, platform adoption rates, and time-to-first-deployment for new team members. Use Azure Monitor and Application Insights to instrument platform usage.
*   **Resources:**
    *   [DORA metrics — DevOps Research and Assessment](https://learn.microsoft.com/en-us/devops/dora/dora-metrics)
    *   [Measuring developer experience](https://learn.microsoft.com/en-us/platform-engineering/developer-experience/measure-developer-experience)
    *   [Azure Monitor overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
