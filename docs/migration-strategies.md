---
title: Migration Strategies
parent: Docs
nav_order: 19
---

# Documentation: Migration Strategies

This document provides further details and context for planning and executing migrations to Azure. A well-planned migration reduces risk, minimizes downtime, and sets the foundation for long-term cloud success.

- [ ] **Assess your workloads with Azure Migrate**

*   **Why:** Migrating without a thorough assessment leads to undersized resources, unexpected costs, and compatibility issues. Azure Migrate provides a centralized hub to discover, assess, and plan migration of on-premises servers, databases, web apps, and virtual desktops — giving you confidence in sizing, cost estimates, and readiness before you move.
*   **How:** Deploy the Azure Migrate appliance in your on-premises environment to discover servers and workloads automatically. Run assessments to evaluate Azure readiness, recommended VM sizes, and estimated monthly costs. Use dependency analysis to understand interconnections between workloads and plan migration waves accordingly.
*   **Resources:**
    *   [About Azure Migrate](https://learn.microsoft.com/en-us/azure/migrate/migrate-services-overview)
    *   [Azure Migrate discovery and assessment](https://learn.microsoft.com/en-us/azure/migrate/concepts-assessment-calculation)
    *   [Create an assessment with Azure Migrate](https://learn.microsoft.com/en-us/azure/migrate/how-to-create-assessment)

- [ ] **Choose the right migration strategy (the 5 Rs)**

*   **Why:** Not every workload should be migrated the same way. Choosing the wrong strategy can result in overspending (lifting and shifting a workload that should be refactored) or unnecessary risk (rearchitecting a stable workload that just needs rehosting). Understanding the 5 Rs helps you match the right approach to each workload's characteristics and business goals.
*   **How:** Evaluate each workload against the five strategies: **Rehost** (lift-and-shift to Azure VMs with minimal changes), **Replatform** (make small optimizations like moving to managed services), **Refactor** (modify code to use cloud-native features like PaaS), **Rearchitect** (redesign for microservices, containers, or serverless), and **Rebuild** (rewrite from scratch when the existing codebase cannot evolve). Consider factors like technical debt, business criticality, and team skill sets when selecting.
*   **Resources:**
    *   [Cloud migration strategy](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/strategy/)
    *   [Migration approaches](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/)
    *   [Azure Architecture Center — Migration guides](https://learn.microsoft.com/en-us/azure/architecture/guide/migration/migration-start-here)

- [ ] **Use Azure Database Migration Service for database migrations**

*   **Why:** Database migrations are among the most complex and risky parts of any cloud migration. Downtime during database cutover directly impacts business operations. Azure Database Migration Service provides automated, minimal-downtime migration paths for SQL Server, MySQL, PostgreSQL, and MongoDB to their Azure-managed equivalents.
*   **How:** Use the Azure Database Migration Service to assess database compatibility and identify potential issues before migration. Configure continuous data replication from source to target for minimal-downtime migrations. Perform a cutover when replication is caught up and validate data integrity post-migration. For SQL Server workloads, consider the Azure SQL Migration extension in Azure Data Studio for a guided experience.
*   **Resources:**
    *   [What is Azure Database Migration Service?](https://learn.microsoft.com/en-us/azure/dms/dms-overview)
    *   [Migrate SQL Server to Azure SQL Database](https://learn.microsoft.com/en-us/azure/dms/tutorial-sql-server-to-azure-sql)
    *   [Azure SQL migration extension for Azure Data Studio](https://learn.microsoft.com/en-us/azure-data-studio/extensions/azure-sql-migration-extension)

- [ ] **Plan for hybrid connectivity during migration**

*   **Why:** Most migrations happen in phases — you will have workloads running both on-premises and in Azure simultaneously. Reliable, secure connectivity between environments is essential for application communication, data synchronization, and DNS resolution during and after the migration period.
*   **How:** Evaluate your bandwidth and latency requirements to choose between Azure VPN Gateway (for encrypted tunnels over the internet) and Azure ExpressRoute (for private, dedicated connections with higher throughput). Set up hub-and-spoke network topology in Azure, configure DNS forwarding for hybrid name resolution, and implement Network Security Groups and Azure Firewall to control traffic between environments.
*   **Resources:**
    *   [Azure VPN Gateway documentation](https://learn.microsoft.com/en-us/azure/vpn-gateway/vpn-gateway-about-vpngateways)
    *   [What is Azure ExpressRoute?](https://learn.microsoft.com/en-us/azure/expressroute/expressroute-introduction)
    *   [Hub-spoke network topology in Azure](https://learn.microsoft.com/en-us/azure/architecture/networking/architecture/hub-spoke)

- [ ] **Follow the Cloud Adoption Framework migration methodology**

*   **Why:** Ad-hoc migrations lack the structure needed for consistent, repeatable success at scale. The Cloud Adoption Framework (CAF) provides a proven methodology that covers planning, readiness, migration execution, and post-migration optimization — helping teams avoid common pitfalls and maintain momentum across migration waves.
*   **How:** Follow CAF's migration lifecycle: **Define strategy** (motivations, business outcomes, business case), **Plan** (digital estate rationalization, skills readiness, migration plan), **Ready** (Azure landing zone setup, networking, identity), **Migrate** (assess, deploy, release workloads in waves), and **Govern & Manage** (post-migration governance, monitoring, and optimization). Use the CAF migration landing zone as a starting point for your Azure environment.
*   **Resources:**
    *   [Cloud Adoption Framework migration overview](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/)
    *   [Azure landing zones overview](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/)
    *   [Migration best practices](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/migrate/azure-best-practices/)

---

## 📚 Recommended Reading

- [Key Architectural Differences Between AWS and Azure Explained](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/key-architectural-differences-between-aws-and-azure-explained/4244702) — Side-by-side comparison of Azure vs AWS services, networking, identity, and architectural patterns
