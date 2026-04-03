---
title: Performance Efficiency
parent: Docs
nav_order: 22
---

# Documentation: Performance Efficiency

This document covers the Performance Efficiency pillar of the Azure Well-Architected Framework, providing guidance on optimizing application speed, scalability, and resource utilization.

- [ ] **Caching Strategies**

*   **Why:** Repeatedly fetching the same data from databases or APIs wastes compute, increases latency, and limits throughput.
*   **How:** Use Azure Cache for Redis for session state, frequently accessed data, and output caching. Implement the cache-aside pattern at the application level — read from cache first, fall back to the database, and populate the cache on miss. Use CDN caching for static assets. Enable database query result caching where supported.
*   **Resources:**
    *   [What is Azure Cache for Redis?](https://learn.microsoft.com/en-us/azure/azure-cache-for-redis/cache-overview)
    *   [Caching best practices](https://learn.microsoft.com/en-us/azure/architecture/best-practices/caching)

- [ ] **Content Delivery Network (CDN)**

*   **Why:** Serving static content from a single region increases latency for global users and puts unnecessary load on origin servers.
*   **How:** Use Azure Front Door as a combined CDN and global load balancer. Configure caching rules for static assets (images, scripts, stylesheets). Set appropriate cache expiration headers. Use compression and HTTP/2 for optimized delivery. Place Front Door in front of App Service, Storage, or Container Apps origins.
*   **Resources:**
    *   [What is Azure Front Door?](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-overview)
    *   [Azure Front Door caching](https://learn.microsoft.com/en-us/azure/frontdoor/front-door-caching)

- [ ] **Load Testing**

*   **Why:** Performance issues discovered in production cause outages and poor user experience. Testing under realistic load before launch identifies bottlenecks early.
*   **How:** Use Azure Load Testing to simulate traffic against your application. Establish performance baselines and set pass/fail criteria for response time and error rate. Run load tests as part of CI/CD pipelines to catch regressions. Test at expected peak load and beyond to understand breaking points.
*   **Resources:**
    *   [What is Azure Load Testing?](https://learn.microsoft.com/en-us/azure/load-testing/overview-what-is-azure-load-testing)
    *   [Quickstart: Create and run a load test](https://learn.microsoft.com/en-us/azure/load-testing/quickstart-create-and-run-load-test)

- [ ] **Database Performance**

*   **Why:** Poorly optimized database queries are the most common source of application latency and the hardest to scale around.
*   **How:** Analyze slow queries using database-native tools (Query Performance Insight for Azure SQL, slow query log for MySQL/PostgreSQL). Add appropriate indexes based on query patterns. Use read replicas to offload read-heavy workloads. Implement connection pooling to avoid connection exhaustion. Consider partitioning large tables for improved query performance.
*   **Resources:**
    *   [Azure SQL Database performance guidance](https://learn.microsoft.com/en-us/azure/azure-sql/database/performance-guidance)
    *   [Query Performance Insight for Azure SQL Database](https://learn.microsoft.com/en-us/azure/azure-sql/database/query-performance-insight-use)

- [ ] **Application Performance Monitoring**

*   **Why:** You cannot optimize what you cannot measure. Without telemetry, performance issues are invisible until users complain.
*   **How:** Instrument applications with Application Insights for automatic dependency tracking, request metrics, and exception logging. Enable distributed tracing to follow requests across microservices. Set up alerts on response time degradation and failure rate spikes. Use the Application Map to visualize service dependencies and identify bottlenecks.
*   **Resources:**
    *   [Application Insights overview](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
    *   [Distributed tracing and telemetry correlation](https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-trace-data)

- [ ] **Auto-scaling Beyond VMs**

*   **Why:** Fixed capacity for PaaS and container workloads wastes money during low demand and causes throttling during spikes.
*   **How:** Configure App Service autoscale based on HTTP queue length or CPU metrics. Use Container Apps scaling rules based on HTTP concurrency, KEDA scalers, or custom metrics. Leverage Functions Consumption plan for automatic per-request scaling. Enable AKS cluster autoscaler to add or remove nodes based on pod scheduling pressure. Set minimum and maximum instance counts to control cost boundaries.
*   **Resources:**
    *   [Scale up an app in Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/manage-scale-up)
    *   [Set scaling rules in Azure Container Apps](https://learn.microsoft.com/en-us/azure/container-apps/scale-app)
    *   [AKS cluster autoscaler](https://learn.microsoft.com/en-us/azure/aks/cluster-autoscaler)
    *   [Azure Functions hosting options](https://learn.microsoft.com/en-us/azure/azure-functions/functions-scale)