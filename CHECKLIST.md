---
title: Checklist
nav_order: 2

---

# Azure Startup Checklist

This checklist provides actionable steps for digital native startups to implement Azure best practices, based on insights from the Microsoft Tech Community article "The Digital Native's Checklist for Azure".

Use this checklist to guide your Azure setup from MVP to a more production-grade environment. Check off items as you complete them. For more details on each item, refer to the corresponding documentation in the `docs/` directory or the linked official Azure resources.

## Identity & Access Management

Getting identity right from the start is crucial. Cleaning it up later is significantly harder.

- [ ] **Use Microsoft Entra ID as the single source of truth:** Centralize user and service identities. [Learn More](docs/identity-access.md#entra-id)
- [ ] **Implement Role-Based Access Control (RBAC) properly:** Avoid using the broad "Owner" role. Assign least privilege access based on roles and responsibilities. [Learn More](docs/identity-access.md#rbac)
- [ ] **Utilize Managed Identities:** Eliminate the need to store credentials in code or configuration for Azure service authentication. [Learn More](docs/identity-access.md#managed-identities)
- [ ] **Enable Privileged Identity Management (PIM):** Implement just-in-time access for privileged roles to enhance security. [Learn More](docs/identity-access.md#pim)

## Networking & Security

Secure networking foundations are essential, even during prototyping.

- [ ] **Design VNets, Subnets, and Network Security Groups (NSGs) thoughtfully:** Plan your network topology with security and scalability in mind. [Learn More](docs/networking-security.md#vnets-subnets-nsgs)
- [ ] **Plan VNet architecture early:** Define your virtual network structure, peering, and routing, even for initial deployments. [Learn More](docs/networking-security.md#vnet-architecture)
- [ ] **Enable Microsoft Defender for Cloud:** Utilize the security posture management and threat protection features (even the free tier offers significant value). [Learn More](docs/networking-security.md#defender-for-cloud)
- [ ] **Deploy Azure Firewall and DDoS Protection where appropriate:** Protect perimeter networks and applications from common threats. [Learn More](docs/networking-security.md#firewall-ddos)
- [ ] **Minimize public IP exposure:** Use Private Endpoints and Service Endpoints for secure access to Azure services. [Learn More](docs/networking-security.md#private-endpoints)
- [ ] **Secure secrets with Azure Key Vault and Managed Identities:** Avoid hardcoding secrets; use Key Vault for secure storage and Managed Identities for access. [Learn More](docs/networking-security.md#key-vault)

## Resource Management & Organization

Avoid resource sprawl and maintain clarity on ownership and purpose.

- [ ] **Define and follow a resource organization strategy:** Utilize Management Groups, Subscriptions, and Resource Groups logically. [Learn More](docs/resource-management.md#organization-strategy)
- [ ] **Implement a consistent tagging strategy:** Tag all resources with relevant information (e.g., owner, environment, cost center, application). [Learn More](docs/resource-management.md#tagging)

## Cost Management & FinOps

Proactively manage Azure costs to avoid surprises and optimize spending.

- [ ] **Utilize Azure Cost Management + Billing:** Regularly monitor spending, analyze cost drivers, and forecast future costs. [Learn More](docs/cost-finops.md#cost-management)
- [ ] **Set up budgets and spending alerts:** Configure alerts to get notified when costs approach or exceed defined thresholds. [Learn More](docs/cost-finops.md#budgets-alerts)
- [ ] **Regularly review Azure Advisor recommendations:** Leverage Advisor for cost optimization, performance, security, and reliability suggestions. [Learn More](docs/cost-finops.md#azure-advisor)
- [ ] **Evaluate cost optimization options:** Explore Azure Reservations, Savings Plans, and Spot Virtual Machines for potential savings. [Learn More](docs/cost-finops.md#optimization-options)
- [ ] **Understand FinOps basics:** Integrate financial accountability into the variable spend model of the cloud. [Learn More](docs/cost-finops.md#finops-basics)

## Monitoring & Observability

Gain visibility into your application and infrastructure health.

- [ ] **Enable Azure Monitor:** Collect and analyze metrics, logs, and traces from your Azure resources and applications. [Learn More](docs/monitoring-observability.md#azure-monitor)
- [ ] **Utilize Azure Service Health and Resource Health:** Stay informed about Azure platform issues and the health of your specific resources. [Learn More](docs/monitoring-observability.md#service-resource-health)
- [ ] **Create meaningful dashboards with Azure Workbooks:** Visualize key metrics and logs to understand system performance and behavior. [Learn More](docs/monitoring-observability.md#workbooks)
- [ ] **Configure advanced alerts:** Set up proactive alerts based on metrics, logs, or activity log events for critical conditions. [Learn More](docs/monitoring-observability.md#advanced-alerts)
- [ ] **Understand and implement MELT (Metrics, Events, Logs, Traces):** Ensure comprehensive observability across your systems. [Learn More](docs/monitoring-observability.md#melt)

## Infrastructure as Code (IaC)

Automate infrastructure deployment and management for consistency and repeatability.

- [ ] **Adopt an IaC tool (Bicep, ARM Templates, Terraform):** Define and manage your Azure infrastructure using code instead of manual portal configuration. [Learn More](docs/infrastructure-as-code.md#iac-tools)
- [ ] **Integrate IaC into CI/CD pipelines:** Automate infrastructure provisioning and updates as part of your deployment process. [Learn More](docs/infrastructure-as-code.md#cicd-integration)
- [ ] **Consider Azure Landing Zones:** Implement a structured approach for governance, security, and scalability, even for smaller environments. [Learn More](docs/infrastructure-as-code.md#landing-zones)

## AKS & Application Architecture

Best practices for running containerized applications on Azure Kubernetes Service.

- [ ] **Review AKS guidance for startups:** Understand core concepts and recommended practices for AKS deployments. [Learn More](docs/aks-app-architecture.md#aks-guidance)
- [ ] **Plan AKS storage, upgrades, identity, and cluster models:** Make informed decisions about fundamental AKS configuration aspects. [Learn More](docs/aks-app-architecture.md#aks-fundamentals)
- [ ] **Integrate AKS with Azure Monitor:** Enable container insights and monitoring for your Kubernetes clusters and workloads. [Learn More](docs/aks-app-architecture.md#aks-monitoring)
- [ ] **Follow AKS best practices:** Adhere to recommended practices for security, networking, scaling, and operations. [Learn More](docs/aks-app-architecture.md#aks-best-practices)

## Azure OpenAI (AOAI)

Considerations for leveraging Generative AI services on Azure.

- [ ] **Review AOAI best practices:** Understand recommended approaches for developing and deploying solutions with Azure OpenAI. [Learn More](docs/azure-openai.md#aoai-best-practices)
- [ ] **Follow guidance for using your own data with AOAI:** Implement secure and effective patterns for retrieval-augmented generation (RAG). [Learn More](docs/azure-openai.md#aoai-custom-data)
- [ ] **Understand AOAI data processing and storage:** Be aware of how prompts, completions, and embeddings are handled. [Learn More](docs/azure-openai.md#aoai-data-handling)
- [ ] **Monitor AOAI data residency, concurrency, and cost:** Plan for and manage these factors, especially as usage scales. [Learn More](docs/azure-openai.md#aoai-operational-considerations)

## Bonus

- [ ] **Review Azure for AWS Professionals documentation (if applicable):** Understand Azure service equivalents if transitioning from AWS. [Learn More](https://aka.ms/Azure4AWSPros)

## Back to the [main page](https://azdnguide.com/)

