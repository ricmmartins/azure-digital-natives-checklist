---
title: Tech Stack Decisions
parent: Architecture & Strategy
grand_parent: Docs
nav_order: 2
description: Side-by-side comparisons for key Azure decisions — AKS vs Container Apps, Bicep vs Terraform, database selection, and more.
---

# Tech Stack Decisions

Key technical decisions you'll face when building on Azure — with context, options compared side-by-side, and our recommended defaults. Use these as starting points for your own technology choices.

---

## AKS vs Azure Container Apps vs App Service

Teams deploying containerized or web workloads on Azure must choose between three primary compute platforms. The right choice depends on operational maturity, workload complexity, and how much infrastructure control the team needs.

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| Azure Kubernetes Service (AKS) | Full Kubernetes API, extensive ecosystem, fine-grained networking and scaling control, supports complex multi-container topologies, wide community support | Steep learning curve, requires dedicated platform engineering effort, cluster upgrades and node pool management are your responsibility | Teams with Kubernetes expertise building complex microservices, workloads needing custom networking (service mesh, CNI plugins), or multi-cloud portability |
| Azure Container Apps | Serverless containers with built-in Dapr, KEDA autoscaling, and revision management; no cluster management; per-second billing on consumption plan | Limited control over underlying infrastructure, fewer networking options than AKS, less mature ecosystem, some Kubernetes features unavailable | Event-driven microservices, APIs, and background processors where teams want container flexibility without Kubernetes operational overhead |
| Azure App Service | Mature PaaS with built-in CI/CD, custom domains, SSL, authentication, deployment slots; supports containers and code-based deployments | Less flexibility for complex container orchestration, limited to single-container or sidecar patterns, scaling is per-plan not per-app on shared plans | Web applications and APIs where development speed matters more than infrastructure control, teams without container expertise |

Start with **Azure Container Apps** for most new containerized workloads — it offers the best balance of flexibility and operational simplicity. Choose **App Service** when deploying straightforward web apps or APIs without complex container requirements. Graduate to **AKS** only when you need full Kubernetes control, have the platform engineering capacity to operate it, or require features like service mesh, custom CNI, or multi-cluster federation.  
**Resources:**
- [Choose an Azure compute service](https://learn.microsoft.com/azure/architecture/guide/technology-choices/compute-decision-tree)
- [Azure Container Apps overview](https://learn.microsoft.com/azure/container-apps/overview)
- [Azure Kubernetes Service overview](https://learn.microsoft.com/azure/aks/what-is-aks)

---

## Bicep vs Terraform

Infrastructure as Code is essential for repeatable, auditable Azure deployments. The two leading IaC tools for Azure — Bicep and Terraform — have meaningfully different strengths that affect team velocity, hiring, and long-term maintainability.

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| Bicep | Native Azure integration, same-day support for new Azure resource types, no state file management, direct ARM compilation, strong VS Code tooling, What-If deployment previews built in | Azure-only (no multi-cloud), smaller community than Terraform, fewer learning resources, limited module ecosystem compared to Terraform Registry | Azure-exclusive organizations wanting the tightest integration, teams already using ARM templates, projects needing immediate access to new Azure features |
| Terraform (AzureRM/AzAPI) | Multi-cloud support, massive module ecosystem, large community and hiring pool, mature state management, plan/apply workflow, extensive testing frameworks (Terratest, OpenTofu) | State file management adds complexity (remote backends, locking, drift), Azure provider often lags behind new resource types by weeks/months, HCL is another language to learn, provider version pinning required | Multi-cloud or hybrid environments, teams with existing Terraform expertise, organizations standardizing IaC across cloud providers |

Use **Bicep** if your organization is Azure-only and wants the simplest path to reliable deployments with same-day resource support. Use **Terraform** if you operate across multiple clouds, already have Terraform expertise, or need the broader module ecosystem. Avoid mixing both in the same project — pick one and standardize. If using Terraform for Azure, supplement with the **AzAPI provider** for resources the AzureRM provider doesn't yet support.  
**Resources:**
- [Bicep overview](https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview)
- [Terraform on Azure documentation](https://learn.microsoft.com/azure/developer/terraform/)
- [Comparing Terraform and Bicep](https://learn.microsoft.com/azure/developer/terraform/comparing-terraform-and-bicep)

---

## Azure SQL vs Cosmos DB vs PostgreSQL Flexible Server

Choosing the right database impacts application design, operational costs, and scaling characteristics. Each option represents a fundamentally different data model and operational trade-off.

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| Azure SQL Database | Mature relational engine, strong ACID guarantees, rich query optimizer, built-in HA with availability zones, Hyperscale tier for large databases, deep integration with .NET ecosystem | Vertical scaling has limits before Hyperscale, schema migrations require planning, cross-region replication adds complexity and cost, licensing can be expensive at scale | Transactional applications with complex queries and joins, teams with SQL Server expertise, workloads needing strict consistency and relational integrity |
| Cosmos DB | Global distribution with multi-region writes, single-digit millisecond latency at any scale, multiple API surfaces (NoSQL, MongoDB, PostgreSQL, Cassandra, Gremlin, Table), serverless consumption tier | Expensive at high throughput (RU cost model is unintuitive), requires careful partition key design, limited cross-partition query performance, eventual consistency by default adds application complexity | Globally distributed applications, high-scale read/write workloads with simple access patterns, scenarios requiring multi-model or multi-API flexibility |
| PostgreSQL Flexible Server | Open-source compatibility (no vendor lock-in), rich extension ecosystem (PostGIS, pgvector, Citus), strong community, cost-effective, excellent for JSONB semi-structured data alongside relational | Fewer Azure-native integrations than Azure SQL, community support rather than Microsoft-proprietary tooling, Citus extension required for true horizontal sharding | Teams with PostgreSQL expertise, applications needing spatial data or vector search (pgvector), cost-sensitive workloads, organizations preferring open-source databases |

Default to **PostgreSQL Flexible Server** for most new applications — it offers the best balance of capability, cost, and portability. Choose **Azure SQL** when your team has deep SQL Server expertise or you need features like Hyperscale, advanced security (Always Encrypted, dynamic data masking), or tight .NET integration. Choose **Cosmos DB** when you need guaranteed low latency at global scale with simple key-value or document access patterns — but carefully model your partition strategy and estimate RU costs before committing.  
**Resources:**
- [Choose an Azure data store](https://learn.microsoft.com/azure/architecture/guide/technology-choices/data-store-overview)
- [Azure Cosmos DB documentation](https://learn.microsoft.com/azure/cosmos-db/)
- [Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/azure/postgresql/flexible-server/overview)

---

## Hub-Spoke vs Virtual WAN

As Azure environments grow beyond a single VNet, teams need a network topology that enables connectivity between workloads, on-premises networks, and the internet while maintaining security boundaries. The two primary patterns are customer-managed hub-spoke and Microsoft-managed Azure Virtual WAN.

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| Hub-Spoke (customer-managed) | Full control over routing, firewalls, and gateways; well-understood pattern with extensive community documentation; cost-predictable (you control what you deploy); flexible NVA choices | You manage the hub infrastructure (firewall, VPN/ER gateways, route tables); peering doesn't transit by default (requires NVA/Azure Firewall for spoke-to-spoke); operational burden grows with scale | Organizations with existing networking expertise, environments with fewer than 20-30 spokes, teams wanting full control over routing and security appliances |
| Azure Virtual WAN | Microsoft-managed routing and transit connectivity; automatic spoke-to-spoke, branch-to-branch, and cross-region transit; integrated SD-WAN partner support; scales to hundreds of branches | Higher base cost (Virtual WAN hub hourly charges plus data processing), less routing flexibility (some advanced scenarios require workarounds), debugging routing issues is harder with managed infrastructure | Large enterprises with many branch offices, organizations needing rapid global connectivity, environments with 30+ spokes or complex hybrid connectivity requirements |

Start with **hub-spoke** for most digital-native organizations — you likely have a small number of spokes and need full control over your network. Deploy Azure Firewall or a third-party NVA in the hub for centralized traffic inspection. Consider **Virtual WAN** when you have many branch offices requiring SD-WAN integration, need automatic cross-region transit, or your spoke count makes manual route management impractical.  
**Resources:**
- [Hub-spoke network topology in Azure](https://learn.microsoft.com/azure/architecture/networking/architecture/hub-spoke)
- [Azure Virtual WAN overview](https://learn.microsoft.com/azure/virtual-wan/virtual-wan-about)
- [Choose between Virtual WAN and hub-spoke](https://learn.microsoft.com/azure/virtual-wan/virtual-wan-about#how-is-virtual-wan-different-from-an-azure-virtual-network-hub)

---

## GitHub Actions vs Azure DevOps Pipelines

CI/CD pipeline choice affects developer experience, integration with source control, and operational workflows. Both platforms are mature and capable, but they serve different organizational profiles.

| Option | Pros | Cons | Best For |
|--------|------|------|----------|
| GitHub Actions | Native GitHub integration, massive marketplace of community actions, YAML-based workflows alongside code, generous free tier for public repos, Copilot integration, modern developer experience | Self-hosted runner management for private networking, limited built-in approval gates compared to Azure DevOps, artifact management less mature, manual effort needed for complex release orchestration | Teams already using GitHub for source control, open-source projects, organizations standardizing on GitHub ecosystem, teams wanting tight integration with GitHub Issues/PRs/Security |
| Azure DevOps Pipelines | Mature release management with stage gates and approvals, built-in artifact feeds (Azure Artifacts), integrated boards and test plans, Microsoft-hosted agents with private networking (VNET integration), strong enterprise compliance features | UI and YAML configurations can be inconsistent, marketplace is smaller, developer experience feels less modern, classic pipeline editor is being deprecated | Enterprises needing advanced release orchestration, teams requiring integrated project management (Boards), organizations with complex approval workflows, regulated industries needing audit trails |

Use **GitHub Actions** if your source code lives in GitHub — the native integration eliminates friction and the ecosystem is growing rapidly. Use **Azure DevOps Pipelines** if you need advanced release management with stage gates, integrated Azure Artifacts feeds, or your organization already standardizes on Azure DevOps for project management. Many teams successfully use a hybrid approach: GitHub for source control and CI, Azure DevOps for release orchestration and artifact management.  
**Resources:**
- [GitHub Actions documentation](https://docs.github.com/actions)
- [Azure Pipelines documentation](https://learn.microsoft.com/azure/devops/pipelines/)
- [Migrate from Azure Pipelines to GitHub Actions](https://docs.github.com/actions/learn-github-actions/migrating-from-azure-pipelines-to-github-actions)

---

## Managed Identity vs Service Principal

Azure services frequently need to authenticate to each other (e.g., an App Service accessing a Key Vault, a Function App reading from Storage, or a CI/CD pipeline deploying resources). The primary options are Managed Identity (system-assigned or user-assigned), Service Principal with client secret or certificate, and Workload Identity Federation. The choice affects secret management burden, security posture, and operational complexity.

| Option | Secret Management | Rotation Required | Security Risk | Supported Scenarios |
|--------|-------------------|-------------------|---------------|---------------------|
| Managed Identity (system/user-assigned) | None — Azure manages credentials automatically | No — credentials are never exposed | Lowest — no secrets to leak, no credentials in code or config | Azure-hosted workloads only (App Service, Functions, VMs, AKS, Container Apps, etc.) |
| Service Principal with client secret | Manual — secrets stored in Key Vault or CI/CD variables | Yes — secrets expire and must be rotated (recommended every 90 days) | High — secrets can leak through logs, repos, config files, or compromised pipelines | Any scenario, but introduces secret sprawl and rotation burden |
| Workload Identity Federation | None — uses OIDC tokens from external identity providers | No — relies on short-lived tokens from the external IdP | Low — no long-lived secrets, tokens are scoped and time-limited | External workloads (GitHub Actions, Kubernetes, other clouds, on-premises) authenticating to Azure |

Prefer **Managed Identity** for all Azure-hosted workloads — it eliminates secret management entirely and is the most secure option. Use **user-assigned Managed Identity** when multiple resources need to share the same identity, or when you need the identity to persist independently of the resource lifecycle. For external workloads like GitHub Actions or on-premises services, use **Workload Identity Federation** with Service Principal — it provides the security benefits of no long-lived secrets while supporting non-Azure environments. **Never use Service Principal with long-lived client secrets** for production workloads — the operational burden of rotation and the risk of secret leakage make this the least desirable option.  
**Resources:**
- [What are managed identities for Azure resources?](https://learn.microsoft.com/entra/identity/managed-identities-azure-resources/overview)
- [Workload identity federation](https://learn.microsoft.com/entra/workload-id/workload-identity-federation)
