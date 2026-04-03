---
title: DevOps & CI/CD
parent: Build & Deploy
grand_parent: Docs
nav_order: 2
description: CI/CD pipelines, IaC automation, deployment strategies (blue/green, canary), environment promotion, and pipeline security for Azure workloads.
---

# Documentation: DevOps & CI/CD Best Practices

This document provides further details and context for implementing DevOps practices and CI/CD pipelines for your Azure workloads.

- [ ] **Implement CI/CD pipelines for application deployment**

*   **Why:** Manual deployments are error-prone, slow, and inconsistent. Automated CI/CD pipelines ensure that every code change goes through a repeatable process of building, testing, and deploying, reducing human error and accelerating delivery velocity.
*   **How:** Use GitHub Actions or Azure DevOps Pipelines to define workflows that trigger on code changes. Include steps for building your application, running unit and integration tests, performing static analysis, and deploying to your target Azure services (App Service, Container Apps, AKS, Functions, etc.).
*   **Resources:**
    *   [GitHub Actions for Azure](https://learn.microsoft.com/en-us/azure/developer/github/github-actions)
    *   [Create your first Azure DevOps pipeline](https://learn.microsoft.com/en-us/azure/devops/pipelines/create-first-pipeline)
    *   [Deploy to Azure App Service using GitHub Actions](https://learn.microsoft.com/en-us/azure/app-service/deploy-github-actions)
    *   [Deploy to Azure Container Apps with GitHub Actions](https://learn.microsoft.com/en-us/azure/container-apps/github-actions)

- [ ] **Automate infrastructure deployment with IaC pipelines**

*   **Why:** Running Bicep or Terraform deployments manually from developer machines introduces drift, inconsistency, and security risks. Infrastructure changes should follow the same rigor as application code—version-controlled, peer-reviewed, and deployed through automated pipelines.
*   **How:** Store your IaC templates (Bicep or Terraform) in source control alongside your application code. Create dedicated pipelines that validate, plan, and apply infrastructure changes. Use pull request workflows to review infrastructure changes before they are deployed. Separate infrastructure pipelines from application deployment pipelines where appropriate.
*   **Resources:**
    *   [Deploy Azure resources by using Bicep and GitHub Actions](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/deploy-github-actions)
    *   [Deploy Azure resources by using Bicep and Azure Pipelines](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/add-template-to-azure-pipelines)
    *   [Automating Terraform with GitHub Actions](https://learn.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage)
    *   [Azure Developer CLI (azd) for CI/CD](https://learn.microsoft.com/en-us/azure/developer/azure-developer-cli/configure-devops-pipeline)

- [ ] **Use deployment strategies to minimize risk**

*   **Why:** Deploying changes to all instances simultaneously creates a large blast radius—if something goes wrong, every user is affected. Progressive deployment strategies allow you to validate changes with a subset of traffic before full rollout, limiting the impact of defects.
*   **How:** Implement blue/green deployments using Azure App Service deployment slots or Azure Container Apps revisions. Use canary deployments to gradually shift traffic to new versions. For AKS workloads, leverage rolling update strategies or tools like Flagger for automated canary analysis. Define rollback procedures for every deployment.
*   **Resources:**
    *   [Set up staging environments in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/deploy-staging-slots)
    *   [Blue-green deployment in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/blue-green-deployment)
    *   [Azure Deployment Environments](https://learn.microsoft.com/en-us/azure/deployment-environments/overview-what-is-azure-deployment-environments)
    *   [Deployment strategies for Azure Kubernetes Service](https://learn.microsoft.com/en-us/azure/aks/concepts-clusters-workloads#deployments-and-yaml-manifests)

- [ ] **Implement environment promotion workflows**

*   **Why:** Promoting code through a series of environments (development → staging → production) with increasing levels of validation ensures that only thoroughly tested changes reach production. This reduces the risk of outages and gives teams confidence in their releases.
*   **How:** Define separate environments (dev, staging, production) in your CI/CD platform. Configure approval gates and manual reviews for promotions to higher environments. Run automated tests at each stage—unit tests in dev, integration and load tests in staging, smoke tests after production deployment. Use environment-specific configurations managed through Azure App Configuration or pipeline variables.
*   **Resources:**
    *   [Using environments for deployment in GitHub Actions](https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment)
    *   [Define approvals and checks for Azure DevOps environments](https://learn.microsoft.com/en-us/azure/devops/pipelines/process/approvals)
    *   [Azure App Configuration](https://learn.microsoft.com/en-us/azure/azure-app-configuration/overview)
    *   [Release engineering with continuous deployment](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments)

- [ ] **Secure your CI/CD pipelines**

*   **Why:** CI/CD pipelines have privileged access to your cloud environments and are a high-value target for attackers. Compromised pipelines can lead to unauthorized deployments, credential exfiltration, or supply chain attacks. Securing the pipeline is as important as securing the application itself.
*   **How:** Use OpenID Connect (OIDC) workload identity federation to authenticate pipelines to Azure—this eliminates the need to store long-lived credentials as secrets. Enable branch protection rules to prevent unauthorized code from being deployed. Use environment protection rules and required reviewers. Scan dependencies for vulnerabilities with GitHub Dependabot or Azure DevOps dependency scanning. Audit pipeline runs and maintain logs for compliance.
*   **Resources:**
    *   [Use GitHub Actions to connect to Azure with OpenID Connect](https://learn.microsoft.com/en-us/azure/developer/github/connect-from-azure-openid-connect)
    *   [Create a workload identity federation for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/pipelines/library/connect-to-azure#create-an-azure-resource-manager-service-connection-that-uses-workload-identity-federation)
    *   [Security best practices for Azure Pipelines](https://learn.microsoft.com/en-us/azure/devops/pipelines/security/overview)
    *   [GitHub Advanced Security for Azure DevOps](https://learn.microsoft.com/en-us/azure/devops/repos/security/configure-github-advanced-security-features)
    *   *See also:* [Identity — Workload Identity Federation](/docs/identity-access.html#workload-identity-federation) · [GitHub Integration — OIDC](/docs/github-integration.html)

---

## 📚 Recommended Reading

- [Azure Support Slack Bot on Azure Container Apps: Production-Ready Guide](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-support-slack-bot-on-azure-container-apps-production-ready-guide/4436423) — Automate Azure support ticket creation directly from Slack instead of navigating the Azure Portal
