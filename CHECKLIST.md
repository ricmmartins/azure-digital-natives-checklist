---
title: Checklist
nav_order: 2

---

# The Checklist

This checklist provides actionable steps for digital native companies to implement Azure best practices, based on insights from the Microsoft Tech Community article "The Digital Native's Checklist for Azure".

Use this checklist to guide your Azure setup from MVP to a more production-grade environment. Check off items as you complete them. For more details on each item, refer to the corresponding documentation in the `docs/` directory or the linked official Azure resources.

## Identity & Access Management

Getting identity right from the start is crucial. Cleaning it up later is significantly harder.

- [ ] **Use Microsoft Entra ID as the single source of truth:** Centralize user and service identities. [Learn More](docs/identity-access.md#entra-id)
- [ ] **Implement Role-Based Access Control (RBAC) properly:** Avoid using the broad "Owner" role. Assign least privilege access based on roles and responsibilities. [Learn More](docs/identity-access.md#rbac)
- [ ] **Utilize Managed Identities:** Eliminate the need to store credentials in code or configuration for Azure service authentication. [Learn More](docs/identity-access.md#managed-identities)
- [ ] **Enable Privileged Identity Management (PIM):** Implement just-in-time access for privileged roles to enhance security. [Learn More](docs/identity-access.md#pim)
- [ ] **Enforce Multi-Factor Authentication (MFA):** Require MFA for all users, especially administrators. Use phishing-resistant methods like FIDO2 security keys. [Learn More](docs/identity-access.md#multi-factor-authentication-mfa)
- [ ] **Configure Conditional Access policies:** Implement Zero Trust access controls based on user, device, location, and risk level. [Learn More](docs/identity-access.md#conditional-access-policies)
- [ ] **Create break-glass emergency access accounts:** Ensure you can regain admin access if Conditional Access policies lock everyone out. [Learn More](docs/identity-access.md#break-glass-accounts)
- [ ] **Use Workload Identity Federation:** Replace service principal secrets with federated credentials for GitHub Actions, Kubernetes, and external IdPs. [Learn More](docs/identity-access.md#workload-identity-federation)

## Networking & Security

Secure networking foundations are essential, even during prototyping.

- [ ] **Design VNets, Subnets, and Network Security Groups (NSGs) thoughtfully:** Plan your network topology with security and scalability in mind. [Learn More](docs/networking-security.md#vnets-subnets-nsgs)
- [ ] **Plan VNet architecture early:** Define your virtual network structure, peering, and routing, even for initial deployments. [Learn More](docs/networking-security.md#vnet-architecture)
- [ ] **Enable Microsoft Defender for Cloud:** Utilize the security posture management and threat protection features (even the free tier offers significant value). [Learn More](docs/networking-security.md#defender-for-cloud)
- [ ] **Deploy Azure Firewall and DDoS Protection where appropriate:** Protect perimeter networks and applications from common threats. [Learn More](docs/networking-security.md#firewall-ddos)
- [ ] **Minimize public IP exposure:** Use Private Endpoints and Service Endpoints for secure access to Azure services. [Learn More](docs/networking-security.md#private-endpoints)
- [ ] **Secure secrets with Azure Key Vault and Managed Identities:** Avoid hardcoding secrets; use Key Vault for secure storage and Managed Identities for access. [Learn More](docs/networking-security.md#key-vault)
- [ ] **Deploy Azure Web Application Firewall (WAF):** Protect web applications from OWASP Top 10 attacks with managed rule sets. [Learn More](docs/networking-security.md#deploy-azure-web-application-firewall-waf)
- [ ] **Configure Azure DNS and DNS security:** Use Azure DNS and Private DNS Zones for reliable, secure name resolution. [Learn More](docs/networking-security.md#configure-azure-dns-and-dns-security)
- [ ] **Enable NSG flow logs and traffic analytics:** Gain visibility into network traffic patterns for security monitoring and troubleshooting. [Learn More](docs/networking-security.md#enable-nsg-flow-logs-and-traffic-analytics)

## Resource Management & Organization

Avoid resource sprawl and maintain clarity on ownership and purpose.

- [ ] **Define and follow a resource organization strategy:** Utilize Management Groups, Subscriptions, and Resource Groups logically. [Learn More](docs/resource-management.md#organization-strategy)
- [ ] **Implement a consistent tagging strategy:** Tag all resources with relevant information (e.g., owner, environment, cost center, application). [Learn More](docs/resource-management.md#tagging)
- [ ] **Establish naming conventions:** Define consistent naming rules (type-workload-env-region-instance) and enforce with Azure Policy. [Learn More](docs/resource-management.md#naming-conventions)
- [ ] **Apply resource locks on production resources:** Prevent accidental deletion of critical resource groups with CanNotDelete locks. [Learn More](docs/resource-management.md#resource-locks)
- [ ] **Use Azure Resource Graph for inventory and compliance:** Query resources at scale across subscriptions for governance and auditing. [Learn More](docs/resource-management.md#azure-resource-graph)
- [ ] **Monitor subscription limits and quotas:** Track quota usage to prevent scaling failures and plan multi-subscription architecture. [Learn More](docs/resource-management.md#subscription-limits-and-quotas)
- [ ] **Organize subscriptions with management groups:** Apply governance consistently across multiple subscriptions using a hierarchical structure. [Learn More](docs/resource-management.md)

## Cost Management & FinOps

Proactively manage Azure costs to avoid surprises and optimize spending.

- [ ] **Utilize Azure Cost Management + Billing:** Regularly monitor spending, analyze cost drivers, and forecast future costs. [Learn More](docs/cost-finops.md#cost-management)
- [ ] **Set up budgets and spending alerts:** Configure alerts to get notified when costs approach or exceed defined thresholds. [Learn More](docs/cost-finops.md#budgets-alerts)
- [ ] **Regularly review Azure Advisor recommendations:** Leverage Advisor for cost optimization, performance, security, and reliability suggestions. [Learn More](docs/cost-finops.md#azure-advisor)
- [ ] **Evaluate cost optimization options:** Explore Azure Reservations, Savings Plans, and Spot Virtual Machines for potential savings. [Learn More](docs/cost-finops.md#optimization-options)
- [ ] **Understand FinOps basics:** Integrate financial accountability into the variable spend model of the cloud. [Learn More](docs/cost-finops.md#finops-basics)
- [ ] **Use Dev/Test pricing and subscriptions:** Leverage discounted rates for non-production environments with Azure Dev/Test offers and B-series burstable VMs. [Learn More](docs/cost-finops.md)
- [ ] **Enable auto-shutdown for non-production resources:** Schedule VM shutdowns to reduce non-production compute costs by 60–70%. [Learn More](docs/cost-finops.md)

## Monitoring & Observability

Gain visibility into your application and infrastructure health.

- [ ] **Enable Azure Monitor:** Collect and analyze metrics, logs, and traces from your Azure resources and applications. [Learn More](docs/monitoring-observability.md#azure-monitor)
- [ ] **Utilize Azure Service Health and Resource Health:** Stay informed about Azure platform issues and the health of your specific resources. [Learn More](docs/monitoring-observability.md#service-resource-health)
- [ ] **Create meaningful dashboards with Azure Workbooks:** Visualize key metrics and logs to understand system performance and behavior. [Learn More](docs/monitoring-observability.md#workbooks)
- [ ] **Configure advanced alerts:** Set up proactive alerts based on metrics, logs, or activity log events for critical conditions. [Learn More](docs/monitoring-observability.md#advanced-alerts)
- [ ] **Understand and implement MELT (Metrics, Events, Logs, Traces):** Ensure comprehensive observability across your systems. [Learn More](docs/monitoring-observability.md#melt)
- [ ] **Use OpenTelemetry for vendor-neutral observability:** Adopt OpenTelemetry SDKs with the Azure Monitor distro to avoid monitoring lock-in. [Learn More](docs/monitoring-observability.md)
- [ ] **Deploy Azure Managed Grafana for dashboards:** Get native Azure integration with Grafana's visualization without managing the infrastructure. [Learn More](docs/monitoring-observability.md)
- [ ] **Configure synthetic monitoring and availability tests:** Proactively detect outages before users report them with Application Insights availability tests. [Learn More](docs/monitoring-observability.md)

## Infrastructure as Code (IaC)

Automate infrastructure deployment and management for consistency and repeatability.

- [ ] **Adopt an IaC tool (Bicep, ARM Templates, Terraform):** Define and manage your Azure infrastructure using code instead of manual portal configuration. [Learn More](docs/infrastructure-as-code.md#iac-tools)
- [ ] **Integrate IaC into CI/CD pipelines:** Automate infrastructure provisioning and updates as part of your deployment process. [Learn More](docs/infrastructure-as-code.md#cicd-integration)
- [ ] **Consider Azure Landing Zones:** Implement a structured approach for governance, security, and scalability, even for smaller environments. [Learn More](docs/infrastructure-as-code.md#landing-zones)
- [ ] **Use Azure Verified Modules for standardized IaC:** Leverage pre-built, tested Bicep/Terraform modules that follow Azure best practices. [Learn More](docs/infrastructure-as-code.md)
- [ ] **Use Azure Developer CLI (azd) for streamlined development:** Simplify provisioning and deploying Azure apps from templates. [Learn More](docs/infrastructure-as-code.md)

## AKS & Application Architecture

Best practices for running containerized applications on Azure Kubernetes Service.

- [ ] **Review AKS guidance for digital natives:** Understand core concepts and recommended practices for AKS deployments. [Learn More](docs/aks-app-architecture.md#aks-guidance)
- [ ] **Plan AKS storage, upgrades, identity, and cluster models:** Make informed decisions about fundamental AKS configuration aspects. [Learn More](docs/aks-app-architecture.md#aks-fundamentals)
- [ ] **Integrate AKS with Azure Monitor:** Enable container insights and monitoring for your Kubernetes clusters and workloads. [Learn More](docs/aks-app-architecture.md#aks-monitoring)
- [ ] **Follow AKS best practices:** Adhere to recommended practices for security, networking, scaling, and operations. [Learn More](docs/aks-app-architecture.md#aks-best-practices)

## Azure AI Services

Considerations for leveraging AI and Generative AI services on Azure.

- [ ] **Review AOAI best practices:** Understand recommended approaches for developing and deploying solutions with Azure OpenAI. [Learn More](docs/azure-openai.md#aoai-best-practices)
- [ ] **Follow guidance for using your own data with AOAI:** Implement secure and effective patterns for retrieval-augmented generation (RAG). [Learn More](docs/azure-openai.md#aoai-custom-data)
- [ ] **Understand AOAI data processing and storage:** Be aware of how prompts, completions, and embeddings are handled. [Learn More](docs/azure-openai.md#aoai-data-handling)
- [ ] **Monitor AOAI data residency, concurrency, and cost:** Plan for and manage these factors, especially as usage scales. [Learn More](docs/azure-openai.md#aoai-operational-considerations)
- [ ] **Implement Responsible AI practices:** Enable content filtering, human-in-the-loop patterns, and follow the Microsoft Responsible AI Standard. [Learn More](docs/azure-openai.md)
- [ ] **Explore Azure AI Foundry for end-to-end AI development:** Use AI Foundry for model catalog, prompt flow, evaluation, and deployment. [Learn More](docs/azure-openai.md)

## Well-Architected Framework

Align your Azure workloads with the Azure Well-Architected Framework for reliable, secure, cost-effective, and performant solutions.

- [ ] **Understand the five pillars of the Well-Architected Framework:** Learn how Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency apply to your workloads. [Learn More](docs/well-architected.md)
- [ ] **Run the Well-Architected Review:** Assess your workloads against WAF pillars using the official review tool. [Learn More](docs/well-architected.md)
- [ ] **Align architecture decisions with WAF pillars:** Use the framework as a decision-making guide for every infrastructure and application choice. [Learn More](docs/well-architected.md)
- [ ] **Leverage Azure Advisor for WAF recommendations:** Use Advisor's continuous analysis to surface actionable improvements across all five pillars. [Learn More](docs/well-architected.md)
- [ ] **Use WAF service guides for specific Azure services:** Consult service-specific WAF guidance when deploying or reviewing any Azure service. [Learn More](docs/well-architected.md)

## Disaster Recovery & Business Continuity

Prepare for the unexpected with tested disaster recovery plans.

- [ ] **Define RPO and RTO for each workload:** Set Recovery Point and Recovery Time Objectives for every critical system. [Learn More](docs/disaster-recovery.md)
- [ ] **Implement Azure Backup for critical resources:** Protect VMs, databases, and storage with automated backups. [Learn More](docs/disaster-recovery.md)
- [ ] **Design for geo-redundancy with Azure Site Recovery:** Orchestrate disaster recovery across Azure regions. [Learn More](docs/disaster-recovery.md)
- [ ] **Test your disaster recovery plan regularly:** Validate your DR plans with test failovers — untested plans are assumptions. [Learn More](docs/disaster-recovery.md)
- [ ] **Leverage availability zones and paired regions:** Deploy across availability zones for HA and replicate to paired regions for DR. [Learn More](docs/disaster-recovery.md)
- [ ] **Implement PaaS disaster recovery patterns:** Configure geo-replication, failover groups, and geo-redundant storage for PaaS services. [Learn More](docs/disaster-recovery.md)

## DevOps & CI/CD

Automate your software delivery pipeline for speed and reliability.

- [ ] **Implement CI/CD pipelines for application deployment:** Use GitHub Actions or Azure DevOps for automated build, test, and deploy workflows. [Learn More](docs/devops-cicd.md)
- [ ] **Automate infrastructure deployment with IaC pipelines:** Run Bicep/Terraform through pipelines, not manually. [Learn More](docs/devops-cicd.md)
- [ ] **Use deployment strategies to minimize risk:** Implement blue/green, canary, or rolling deployments to reduce blast radius. [Learn More](docs/devops-cicd.md)
- [ ] **Secure your CI/CD pipelines:** Use OIDC/workload identity federation, protect secrets, and enable branch protection. [Learn More](docs/devops-cicd.md)
- [ ] **Implement environment promotion workflows:** Promote code through dev → staging → production with approval gates and automated tests at each stage. [Learn More](docs/devops-cicd.md)

## Compliance & Governance

Establish guardrails and meet regulatory obligations from day one.

- [ ] **Implement Azure Policy for guardrails:** Enforce organizational standards and assess compliance at scale. [Learn More](docs/compliance-governance.md)
- [ ] **Organize resources with Management Groups:** Apply governance consistently across multiple subscriptions. [Learn More](docs/compliance-governance.md)
- [ ] **Understand your compliance obligations:** Map applicable regulatory frameworks (SOC 2, HIPAA, GDPR) to Azure compliance offerings. [Learn More](docs/compliance-governance.md)
- [ ] **Enable Microsoft Defender for Cloud regulatory compliance:** Use the compliance dashboard to continuously assess your environment against industry standards. [Learn More](docs/compliance-governance.md)
- [ ] **Implement data governance with Microsoft Purview:** Use Purview for data cataloging, classification, and lineage tracking. [Learn More](docs/compliance-governance.md)

## Data Services

Choose and manage the right data services for your workloads.

- [ ] **Choose the right database for your workload:** Understand when to use Cosmos DB, Azure SQL, PostgreSQL Flexible Server, or Redis Cache. [Learn More](docs/data-services.md)
- [ ] **Implement database high availability and backups:** Configure geo-replication, failover, and point-in-time restore. [Learn More](docs/data-services.md)
- [ ] **Secure database access with Private Endpoints and Managed Identities:** Never expose databases publicly; use Private Endpoints and Managed Identities. [Learn More](docs/data-services.md)
- [ ] **Design your data tier for scalability:** Understand partitioning, read replicas, connection pooling, and elastic scaling. [Learn More](docs/data-services.md)
- [ ] **Implement a data storage strategy:** Use the right storage tier for each data type — Blob for unstructured, Data Lake for analytics, access tiers for cost optimization. [Learn More](docs/data-services.md)

## Application Architecture

Design resilient, scalable applications on Azure.

- [ ] **Choose the right Azure compute service:** Understand trade-offs between App Service, Container Apps, Functions, and AKS. [Learn More](docs/app-architecture.md)
- [ ] **Design for resilience with retry and circuit breaker patterns:** Implement transient fault handling and circuit breakers. [Learn More](docs/app-architecture.md)
- [ ] **Implement API management for your services:** Use Azure API Management for rate limiting, auth, versioning, and monitoring. [Learn More](docs/app-architecture.md)
- [ ] **Use asynchronous messaging for loosely coupled architectures:** Leverage Service Bus and Event Grid to decouple services. [Learn More](docs/app-architecture.md)
- [ ] **Follow the Azure Architecture Center reference architectures:** Start from proven, battle-tested designs for common application patterns. [Learn More](docs/app-architecture.md)

## SLA & SLO Management

Define, measure, and manage your reliability targets.

- [ ] **Understand Azure SLAs for every service you use:** Know guaranteed uptime and what counts as downtime for each service. [Learn More](docs/sla-slo.md)
- [ ] **Calculate composite SLAs for your architecture:** Multiply individual SLAs to understand end-to-end availability targets. [Learn More](docs/sla-slo.md)
- [ ] **Define SLOs and SLIs for your application:** Set Service Level Objectives and Indicators that matter to your customers. [Learn More](docs/sla-slo.md)
- [ ] **Implement error budgets and monitor SLO compliance:** Use error budgets to balance velocity against reliability. [Learn More](docs/sla-slo.md)
- [ ] **Monitor and alert on SLO compliance:** Build dashboards and alerts that track SLI metrics and error budget consumption in real time. [Learn More](docs/sla-slo.md)

## Platform Engineering

Build internal developer platforms for self-service infrastructure and faster delivery.

- [ ] **Build an Internal Developer Platform (IDP):** Create self-service capabilities for developers to provision infrastructure and deploy apps without tickets. [Learn More](docs/platform-engineering.md)
- [ ] **Standardize developer environments with Azure Deployment Environments:** Provide pre-configured, project-specific environments for developers. [Learn More](docs/platform-engineering.md)
- [ ] **Implement service catalogs and golden paths:** Provide curated templates that enforce standards while empowering developer autonomy. [Learn More](docs/platform-engineering.md)
- [ ] **Use Azure Developer CLI (azd) for developer experience:** Streamline the code-to-cloud workflow with consistent init, provision, and deploy commands. [Learn More](docs/platform-engineering.md)
- [ ] **Measure platform adoption with developer experience metrics:** Track DORA metrics and developer satisfaction to iterate on your platform. [Learn More](docs/platform-engineering.md)

## GitHub Integration

Leverage GitHub for secure, integrated Azure development workflows.

- [ ] **Use GitHub Actions for Azure deployments:** Leverage GitHub Actions with Azure-specific actions for CI/CD. [Learn More](docs/github-integration.md)
- [ ] **Authenticate securely with OIDC workload identity federation:** Replace long-lived secrets with OpenID Connect federation for secretless deployments. [Learn More](docs/github-integration.md)
- [ ] **Enable GitHub Advanced Security (GHAS):** Use code scanning, secret scanning, and dependency review to find vulnerabilities early. [Learn More](docs/github-integration.md)
- [ ] **Integrate GitHub Copilot into your development workflow:** Accelerate Azure development with AI-assisted code suggestions. [Learn More](docs/github-integration.md)
- [ ] **Manage infrastructure repositories with branch protection and CODEOWNERS:** Ensure infrastructure changes receive mandatory review from qualified team members. [Learn More](docs/github-integration.md)

## Migration Strategies

Plan and execute workload migrations to Azure.

- [ ] **Assess your workloads with Azure Migrate:** Discover, assess, and plan migration of on-premises or other-cloud workloads. [Learn More](docs/migration-strategies.md)
- [ ] **Choose the right migration strategy (the 5 Rs):** Understand Rehost, Replatform, Refactor, Rearchitect, and Rebuild. [Learn More](docs/migration-strategies.md)
- [ ] **Use Azure Database Migration Service for database migrations:** Migrate databases with minimal downtime. [Learn More](docs/migration-strategies.md)
- [ ] **Plan for hybrid connectivity during migration:** Set up VPN Gateway or ExpressRoute, hub-spoke networking, and DNS forwarding for the migration period. [Learn More](docs/migration-strategies.md)
- [ ] **Follow the Cloud Adoption Framework migration methodology:** Use CAF's structured approach for planning, migrating, and optimizing. [Learn More](docs/migration-strategies.md)

## Performance Efficiency

Optimize application performance with caching, CDN, load testing, and auto-scaling.

- [ ] **Implement caching strategies:** Use Azure Cache for Redis and CDN to reduce latency and database load. [Learn More](docs/performance-efficiency.md)
- [ ] **Use Azure Front Door or CDN for global content delivery:** Serve static content from edge locations closest to users. [Learn More](docs/performance-efficiency.md)
- [ ] **Perform load testing before production launches:** Use Azure Load Testing to establish performance baselines and identify bottlenecks. [Learn More](docs/performance-efficiency.md)
- [ ] **Optimize database performance:** Implement indexing, connection pooling, read replicas, and query optimization. [Learn More](docs/performance-efficiency.md)
- [ ] **Monitor application performance with Application Insights:** Use distributed tracing and performance counters to detect slow requests. [Learn More](docs/performance-efficiency.md)
- [ ] **Configure auto-scaling across all compute tiers:** Enable autoscale for App Service, Container Apps, Functions, and AKS. [Learn More](docs/performance-efficiency.md)

## VM Scale Sets (VMSS)

Best practices for deploying and managing VM Scale Sets for custom compute workloads.

- [ ] **Understand VMSS core concepts:** Learn about orchestration modes, scaling policies, and fault domain distribution. [Learn More](docs/vm-scale-sets.md)
- [ ] **Configure auto-scaling rules:** Set metric-based and schedule-based rules with appropriate thresholds and cooldown periods. [Learn More](docs/vm-scale-sets.md)
- [ ] **Implement golden image management:** Use Azure Compute Gallery and Image Builder for consistent, hardened VM images. [Learn More](docs/vm-scale-sets.md)
- [ ] **Configure health monitoring and automatic repair:** Use the Application Health extension and automatic instance repairs for self-healing scale sets. [Learn More](docs/vm-scale-sets.md)
- [ ] **Follow VMSS security best practices:** Use managed identities, private subnets, NSGs, and disk encryption across all instances. [Learn More](docs/vm-scale-sets.md)
- [ ] **Optimize VMSS costs:** Use Spot VMs for fault-tolerant workloads, right-size SKUs, and purchase reservations for baseline capacity. [Learn More](docs/vm-scale-sets.md)

## Bonus

- [ ] **Review Azure for AWS Professionals documentation (if applicable):** Understand Azure service equivalents if transitioning from AWS. [Learn More](https://aka.ms/Azure4AWSPros)

