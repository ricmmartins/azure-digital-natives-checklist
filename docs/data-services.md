---
title: Data Services
parent: Docs
nav_order: 14
---

# Documentation: Data Services

This document provides further details and context for the Data Services section of the Azure Digital Natives Guide.

- [ ] **Choose the right database for your workload**

*   **Why:** Azure offers multiple database services, each optimized for different workload patterns. Choosing the wrong database can lead to poor performance, excessive costs, and architectural limitations that are expensive to change later.
*   **How:** Evaluate your workload requirements against the strengths of each service. Use Azure Cosmos DB for globally distributed, low-latency NoSQL workloads with multi-model support. Use Azure SQL Database for relational workloads requiring ACID compliance and T-SQL compatibility. Use Azure Database for PostgreSQL Flexible Server for open-source relational workloads that need PostgreSQL ecosystem compatibility. Use Azure Cache for Redis for caching, session management, and real-time leaderboards.
*   **Resources:**
    *   [Azure Cosmos DB overview](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction)
    *   [What is Azure SQL Database?](https://learn.microsoft.com/en-us/azure/azure-sql/database/sql-database-paas-overview)
    *   [What is Azure Database for PostgreSQL Flexible Server?](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/overview)
    *   [About Azure Cache for Redis](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview)
    *   [Review your data options](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/data-store-overview)

- [ ] **Implement database high availability and backups**

*   **Why:** Database outages and data loss can be catastrophic for your business. Configuring high availability and backup strategies ensures your data is protected and your applications remain operational during failures or regional outages.
*   **How:** Configure geo-replication for Azure SQL Database and Cosmos DB to replicate data across regions. Enable automatic failover groups for Azure SQL Database to provide seamless failover. Configure point-in-time restore policies for all database services to recover from accidental data corruption. Test your failover and restore procedures regularly.
*   **Resources:**
    *   [Overview of business continuity with Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/business-continuity-high-availability-disaster-recover-hadr-overview)
    *   [High availability in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/high-availability)
    *   [Backup and restore in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-backup-restore)
    *   [Active geo-replication for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/active-geo-replication-overview)

- [ ] **Secure database access with Private Endpoints and Managed Identities**

*   **Why:** Exposing databases to the public internet significantly increases the attack surface. Connection strings with embedded credentials can be leaked through source code, logs, or configuration files. Private Endpoints and Managed Identities eliminate these risks by keeping traffic on the Azure backbone and removing credentials from your code.
*   **How:** Deploy Private Endpoints for every database service to ensure traffic flows over the Microsoft private network. Disable public network access on your database resources. Use Managed Identities for authentication instead of storing passwords or connection strings in application configuration. Configure Microsoft Entra ID authentication for Azure SQL Database and PostgreSQL Flexible Server.
*   **Resources:**
    *   [Azure Private Endpoint overview](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview)
    *   [Use Microsoft Entra authentication with Azure SQL](https://learn.microsoft.com/en-us/azure/azure-sql/database/authentication-aad-overview)
    *   [Microsoft Entra authentication with Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-azure-ad-authentication)
    *   [What are managed identities for Azure resources?](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview)

- [ ] **Design your data tier for scalability**

*   **Why:** As your application grows, your database must scale to meet increased demand without downtime or performance degradation. Understanding partitioning, read replicas, connection pooling, and elastic scaling ensures your data tier can grow with your business.
*   **How:** Implement partitioning strategies in Cosmos DB by choosing an effective partition key that distributes data evenly. Use read replicas in Azure SQL Database and PostgreSQL Flexible Server to offload read traffic. Implement connection pooling to manage database connections efficiently and avoid connection exhaustion. Evaluate Azure SQL Database elastic pools for workloads with variable resource demands across multiple databases.
*   **Resources:**
    *   [Partitioning in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/partitioning-overview)
    *   [Read replicas in Azure Database for PostgreSQL Flexible Server](https://learn.microsoft.com/en-us/azure/postgresql/flexible-server/concepts-read-replicas)
    *   [Elastic pools for managing multiple Azure SQL databases](https://learn.microsoft.com/en-us/azure/azure-sql/database/elastic-pool-overview)
    *   [Request units in Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/request-units)

- [ ] **Implement a data storage strategy**

*   **Why:** Not all data belongs in a database. Using the right storage tier for different data types reduces costs and improves performance. Structured transactional data belongs in databases, while unstructured data like images, documents, and backups should use Azure Blob Storage. Analytics workloads require storage optimized for large-scale data processing.
*   **How:** Use Azure Blob Storage for unstructured data such as images, videos, documents, and backups. Use Azure Data Lake Storage Gen2 for analytics and big data workloads that require hierarchical namespace and integration with Azure Synapse Analytics. Configure storage access tiers—hot for frequently accessed data, cool for infrequent access, and archive for long-term retention—to optimize costs based on data access patterns.
*   **Resources:**
    *   [Introduction to Azure Blob Storage](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-blobs-introduction)
    *   [Introduction to Azure Data Lake Storage Gen2](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction)
    *   [Access tiers for blob data](https://learn.microsoft.com/en-us/azure/storage/blobs/access-tiers-overview)
    *   [Azure Storage redundancy](https://learn.microsoft.com/en-us/azure/storage/common/storage-redundancy)
