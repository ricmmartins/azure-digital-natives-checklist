---
title: SLA & SLO Management
parent: Day 2 Operations
grand_parent: Docs
nav_order: 4
description: Azure SLAs, composite SLA calculations, defining SLOs and SLIs, error budgets, and monitoring SLO compliance.
---

# Documentation: SLA & SLO Management

This document provides further details and context for the SLA & SLO Management section of the Azure Digital Natives Guide.

- [ ] **Understand Azure SLAs for every service you use**

*   **Why:** Each Azure service comes with a Service Level Agreement (SLA) that defines the guaranteed uptime percentage and the conditions under which downtime is measured. Understanding these SLAs is essential because they define the reliability baseline you can expect, influence your architecture decisions, and determine your eligibility for service credits when guarantees are not met.
*   **How:** Review the SLA for every Azure service in your architecture. Pay attention to what counts as downtime for each service—it varies between services. Understand the difference between single-instance and multi-instance SLA tiers, as deploying across availability zones or regions typically provides a higher SLA. Document the SLA for each service alongside your architecture diagrams.
*   **Resources:**
    *   [Service Level Agreements (SLA) for Online Services](https://learn.microsoft.com/en-us/azure/reliability/availability-service-by-category)
    *   [Azure reliability documentation](https://learn.microsoft.com/en-us/azure/reliability/)
    *   [Availability zone service and regional support](https://learn.microsoft.com/en-us/azure/reliability/availability-zones-service-support)

- [ ] **Calculate composite SLAs for your architecture**

*   **Why:** Your application's overall availability is determined by the combined SLAs of all the services it depends on. When services are chained in series, you multiply their individual SLAs—resulting in a composite SLA that is always lower than any single service. Understanding this math is critical to setting realistic availability targets.
*   **How:** Identify all Azure services in your critical path and multiply their individual SLA percentages to calculate the composite SLA. For example, if your architecture depends on App Service (99.95%) and SQL Database (99.99%), the composite SLA is approximately 99.94%. Design redundancy to improve composite availability—add failover paths, redundant components, or multi-region deployments so that the failure of one component does not bring down the entire system.
*   **Resources:**
    *   [Composite SLAs](https://learn.microsoft.com/en-us/azure/architecture/framework/resiliency/business-metrics#composite-slas)
    *   [Recommendations for defining reliability targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics)
    *   [Design for redundancy](https://learn.microsoft.com/en-us/azure/architecture/guide/design-principles/redundancy)

- [ ] **Define SLOs and SLIs for your application**

*   **Why:** Azure SLAs define what Microsoft guarantees, but they do not capture what matters to your customers. Service Level Objectives (SLOs) are internal targets you set based on user expectations—such as page load time under 2 seconds or API success rate above 99.9%. Service Level Indicators (SLIs) are the metrics you measure to determine whether you are meeting those objectives.
*   **How:** Identify the user-facing behaviors that matter most—availability, latency, throughput, and error rate. Define SLIs as specific, measurable metrics (e.g., the proportion of HTTP requests that return successfully within 500 ms). Set SLOs as target values for those SLIs that reflect the level of service your users expect. Document your SLOs and share them across engineering and product teams.
*   **Resources:**
    *   [Recommendations for defining reliability targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics)
    *   [Monitoring application health for reliability](https://learn.microsoft.com/en-us/azure/well-architected/reliability/monitoring-alerting-strategy)
    *   [Health modeling for workloads](https://learn.microsoft.com/en-us/azure/well-architected/cross-cutting-guides/health-modeling)

- [ ] **Implement error budgets**

*   **Why:** An error budget is the allowed amount of unreliability over a given period, derived from your SLO. For example, a 99.9% availability SLO allows approximately 43 minutes of downtime per month. Error budgets provide a data-driven way to balance the velocity of shipping new features against the need for reliability work—when the budget is healthy, ship faster; when it is nearly exhausted, prioritize stability.
*   **How:** Calculate your error budget from your SLO (e.g., 100% minus 99.9% = 0.1% error budget). Track the error budget consumption in real time using your SLI measurements. Establish policies for what happens when the error budget is nearly consumed—such as freezing feature deployments and focusing on reliability improvements. Review error budget status in regular engineering reviews to keep reliability and velocity in balance.
*   **Resources:**
    *   [Recommendations for defining reliability targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/metrics)
    *   [Azure Well-Architected Framework reliability pillar](https://learn.microsoft.com/en-us/azure/well-architected/reliability/)
    *   [Operational Excellence - Safe deployment practices](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/safe-deployments)

- [ ] **Monitor and alert on SLO compliance**

*   **Why:** SLOs and error budgets are only useful if you actively monitor them. Without real-time visibility into SLI metrics and error budget consumption, your team cannot make informed decisions about when to prioritize reliability over feature development—and issues may go undetected until they impact users.
*   **How:** Use Azure Monitor to collect the SLI metrics that underpin your SLOs—such as request success rate, latency percentiles, and availability. Create Azure Monitor alerts that fire when SLIs drop below SLO thresholds or when error budget consumption exceeds a defined rate (e.g., burning through more than 50% of the monthly budget in one week). Build dashboards with Azure Monitor Workbooks to provide real-time visibility into SLO status and error budget health for engineering and leadership teams.
*   **Resources:**
    *   [Azure Monitor overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
    *   [Overview of alerts in Microsoft Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview)
    *   [Azure Monitor Workbooks overview](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview)
    *   [Monitoring application health for reliability](https://learn.microsoft.com/en-us/azure/well-architected/reliability/monitoring-alerting-strategy)

---

## 📚 Recommended Reading

- [Azure Service Level Agreements (SLAs)](https://learn.microsoft.com/en-us/azure/reliability/concept-service-level-agreements) — Official documentation on SLA concepts, composite SLAs, and availability calculations
