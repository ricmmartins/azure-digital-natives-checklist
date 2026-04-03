---
title: GitHub Integration
parent: Docs
nav_order: 18
---

# Documentation: GitHub Integration with Azure

This document provides further details and context for integrating GitHub with Azure. A well-integrated GitHub and Azure workflow accelerates delivery, strengthens security, and provides a seamless developer experience from code commit to production deployment.

- [ ] **Use GitHub Actions for Azure deployments**

*   **Why:** Manual deployments are error-prone, slow, and difficult to audit. GitHub Actions provides native CI/CD automation directly from your source code repository, with a rich ecosystem of Azure-specific actions for deploying to App Service, Container Apps, AKS, Functions, and more.
*   **How:** Create workflow files in `.github/workflows/` that use official Azure actions (`azure/login`, `azure/webapps-deploy`, `azure/aks-set-context`, etc.). Define triggers for push, pull request, or manual dispatch. Use environments with protection rules for production deployments, and leverage reusable workflows to standardize pipelines across repositories.
*   **Resources:**
    *   [Deploy to Azure using GitHub Actions](https://learn.microsoft.com/en-us/azure/developer/github/deploy-to-azure)
    *   [GitHub Actions for Azure](https://learn.microsoft.com/en-us/azure/developer/github/github-actions)
    *   [Use GitHub Actions workflow to deploy to App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions)

- [ ] **Authenticate securely with OIDC workload identity federation**

*   **Why:** Storing Azure service principal secrets in GitHub repository secrets creates a security liability — secrets can expire, leak, or be over-permissioned. OpenID Connect (OIDC) workload identity federation eliminates stored credentials entirely by establishing a trust relationship between GitHub and Azure, enabling secretless deployments.
*   **How:** Create a Microsoft Entra ID application registration and configure a federated credential that trusts your GitHub repository (scoped to specific branches, tags, or environments). In your GitHub Actions workflow, use the `azure/login` action with OIDC by setting `permissions: id-token: write` and providing the client ID, tenant ID, and subscription ID — no client secret needed.
*   **Resources:**
    *   [Use GitHub Actions to connect to Azure (OIDC)](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect)
    *   [Configure a federated identity credential on an app](https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation-create-trust)
    *   [Workload identity federation overview](https://learn.microsoft.com/en-us/entra/workload-id/workload-identity-federation)

- [ ] **Enable GitHub Advanced Security (GHAS)**

*   **Why:** Vulnerabilities in code, leaked secrets, and insecure dependencies are among the most common attack vectors. GitHub Advanced Security provides automated scanning that catches these issues in the development workflow — before they reach production — significantly reducing your attack surface.
*   **How:** Enable secret scanning to detect accidentally committed credentials (Azure keys, connection strings, tokens). Configure code scanning with CodeQL for static analysis of your codebase in pull requests. Turn on dependency review to flag vulnerable packages before they are merged. Set up security policies to require scanning checks to pass before merging.
*   **Resources:**
    *   [About GitHub Advanced Security](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security)
    *   [Azure DevOps integration with GitHub Advanced Security](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features)
    *   [Secret scanning for Azure service principal credentials](https://docs.github.com/en/code-security/secret-scanning/introduction/about-secret-scanning)

- [ ] **Integrate GitHub Copilot into your development workflow**

*   **Why:** Developers spend significant time on boilerplate code, researching Azure SDK patterns, and writing infrastructure-as-code. GitHub Copilot accelerates development by providing contextual code suggestions, chat-based assistance for Azure-specific tasks, and CLI help — reducing time spent on repetitive work and unfamiliar APIs.
*   **How:** Enable GitHub Copilot for your organization and configure policies for allowed usage. Developers can use Copilot in their IDE for inline code suggestions when writing Bicep, Terraform, ARM templates, or Azure SDK code. Use Copilot Chat to ask questions about Azure services, debug deployment issues, and generate infrastructure templates. Use Copilot in the CLI for command-line assistance with Azure CLI and azd commands.
*   **Resources:**
    *   [GitHub Copilot documentation](https://learn.microsoft.com/en-us/copilot/overview)
    *   [Quickstart for GitHub Copilot](https://learn.microsoft.com/en-us/copilot/quickstart)
    *   [GitHub Copilot for Azure](https://learn.microsoft.com/en-us/azure/developer/github-copilot-azure/get-started)

- [ ] **Manage infrastructure repositories with branch protection and CODEOWNERS**

*   **Why:** Infrastructure-as-code changes can have outsized impact — a misconfigured Bicep or Terraform file can take down production or expose sensitive data. Branch protection rules and CODEOWNERS files ensure that infrastructure changes receive mandatory review from qualified team members before merging.
*   **How:** Enable branch protection on `main` (or your default branch) requiring pull request reviews, status checks (linting, plan output), and signed commits. Create a `CODEOWNERS` file that assigns infrastructure directories (e.g., `/infra/`, `/bicep/`, `/terraform/`) to your platform or security team. Use required reviewers and dismiss stale reviews on new pushes to ensure every change is properly vetted.
*   **Resources:**
    *   [Manage branch protection rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/managing-a-branch-protection-rule)
    *   [About code owners](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
    *   [GitHub and Azure DevOps integration](https://learn.microsoft.com/en-us/azure/developer/github/integrate-azure-devops)
