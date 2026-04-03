---
title: Monitoring & Observability
parent: Day 2 Operations
grand_parent: Docs
nav_order: 2
description: Azure Monitor, Application Insights, health signals, workbooks, alerts, MELT data, OpenTelemetry, Managed Grafana, and synthetic monitoring.
---

# Documentation: Monitoring & Observability

This document provides further details and context for the Monitoring & Observability section of the Azure Digital Natives Guide.

- [ ] **Enable Azure Monitor**

*   **Why:** Azure Monitor provides comprehensive monitoring of your Azure resources and applications, collecting metrics, logs, and traces. Without proper monitoring, you'll be blind to performance issues, errors, and potential security incidents.
*   **How:** Azure Monitor is automatically enabled for basic metrics collection. Configure Log Analytics workspaces to collect and analyze logs from your resources. Enable Application Insights for your applications to collect detailed telemetry.
*   **Resources:**
    *   [Azure Monitor overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
    *   [Create a Log Analytics workspace in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace)
    *   [What is Application Insights?](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)
*   **Quick check:** Verify a resource has diagnostic settings configured:
    ```bash
    az monitor diagnostic-settings list --resource <resource-id> -o table
    ```
    Use [Azure Policy](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/diagnostic-settings-policy) to enforce diagnostic settings at scale.

- [ ] **Utilize Azure Service Health and Resource Health**

*   **Why:** Service Health provides personalized alerts and guidance about Azure service issues and planned maintenance that might affect your resources. Resource Health gives you visibility into the health of your specific resources.
*   **How:** Configure Service Health alerts to notify your team about service issues or planned maintenance. Regularly check Resource Health to understand the current and historical health of your resources.
*   **Resources:**
    *   [Azure Service Health overview](https://learn.microsoft.com/en-us/azure/service-health/service-health-overview)
    *   [Resource Health overview](https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview)
    *   [Create activity log alerts on service notifications](https://learn.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications)
*   **Quick check:** Verify Resource Health alerts exist in your subscription:
    ```bash
    az monitor activity-log alert list -o json \
      | jq '[.[] | select(.condition.allOf[]? | .field=="category" and .equals=="ResourceHealth")] | length'
    ```

- [ ] **Create meaningful dashboards with Azure Workbooks**

*   **Why:** Workbooks combine text, analytics queries, metrics, and parameters into interactive reports and dashboards. They help visualize complex data and share insights across teams.
*   **How:** Create Workbooks that combine metrics, logs, and other data sources relevant to your applications and infrastructure. Share these Workbooks with stakeholders for a common operational view.
*   **Resources:**
    *   [Azure Monitor Workbooks overview](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview)
    *   [Create interactive reports with Azure Monitor Workbooks](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-create-workbook)

- [ ] **Configure advanced alerts**

*   **Why:** Proactive alerting is essential for identifying and addressing issues before they impact users. Advanced alerts can monitor complex conditions across multiple signals and trigger automated responses.
*   **How:** Define alert rules based on metrics, logs, or activity log events. Configure appropriate thresholds, evaluation frequency, and severity. Set up action groups to notify the right people or trigger automated remediation.
*   **Resources:**
    *   [Overview of alerts in Microsoft Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview)
    *   [Create, view, and manage metric alerts](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-metric)
    *   [Create, view, and manage log alerts](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-log)
    *   [Create and manage action groups](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups)

- [ ] **Understand and implement MELT (Metrics, Events, Logs, Traces)**

*   **Why:** MELT provides a comprehensive approach to observability, covering different aspects of system behavior. Metrics show what's happening, events record what happened, logs provide context, and traces show the path of requests through distributed systems.
*   **How:** Implement a strategy that collects all four types of telemetry:
    *   **Metrics:** Numerical values that describe some aspect of a system at a particular point in time (e.g., CPU usage, request count)
    *   **Events:** Discrete occurrences in your system (e.g., user actions, system state changes)
    *   **Logs:** Text records of events that happened in your system
    *   **Traces:** Records of requests as they flow through distributed systems, showing the path and timing
*   **Resources:**
    *   [Observability in Azure](https://learn.microsoft.com/en-us/azure/architecture/best-practices/monitoring)
    *   [Distributed tracing in Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing)
    *   *(From article)* [MELT in Azure](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-monitor--melt-a-comprehensive-approach-to-cloud-observability/4251166)

- [ ] **Use OpenTelemetry for vendor-neutral observability**

*   **Why:** OpenTelemetry provides a vendor-neutral standard for instrumentation, avoiding lock-in to any single monitoring backend. By adopting OpenTelemetry SDKs, you can switch or combine monitoring backends without re-instrumenting your applications.
*   **How:** Use the Azure Monitor OpenTelemetry Distro for .NET, Node.js, Python, or Java applications. The distro bundles the OpenTelemetry SDK with the Azure Monitor Exporter, giving you automatic collection of traces, metrics, and logs that flow into Application Insights and Log Analytics. For custom telemetry, use the standard OpenTelemetry API — your code stays portable.
*   **Resources:**
    *   [Enable Azure Monitor OpenTelemetry](https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-enable)
    *   [OpenTelemetry overview](https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-overview)
    *   [Azure Monitor OpenTelemetry Distro](https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-configuration)

- [ ] **Deploy Azure Managed Grafana for dashboards**

*   **Why:** Teams already using Grafana get native Azure integration without managing Grafana infrastructure. Azure Managed Grafana provides built-in data source connections to Azure Monitor, Log Analytics, and Azure Data Explorer, making it easy to build rich operational dashboards.
*   **How:** Deploy an Azure Managed Grafana workspace from the Azure portal. Connect it to your Azure Monitor and Log Analytics workspaces as data sources. Build dashboards using Grafana's visualization capabilities with your existing Azure telemetry data.
*   **Resources:**
    *   [What is Azure Managed Grafana?](https://learn.microsoft.com/azure/managed-grafana/overview)
    *   [Create an Azure Managed Grafana instance](https://learn.microsoft.com/azure/managed-grafana/quickstart-managed-grafana-portal)

- [ ] **Configure synthetic monitoring and availability tests**

*   **Why:** Synthetic monitoring detects outages and performance degradation before users report them, by proactively testing your application endpoints from multiple global locations at regular intervals.
*   **How:** Configure Application Insights availability tests to continuously monitor your application's responsiveness. Use URL ping tests for basic endpoint availability checks, and standard tests for more advanced scenarios including custom headers, SSL certificate validation, and HTTP verb selection. Set up alerts to notify your team immediately when availability drops below thresholds.
*   **Resources:**
    *   [Application Insights availability tests](https://learn.microsoft.com/azure/azure-monitor/app/availability-overview)
    *   [Create a standard availability test](https://learn.microsoft.com/azure/azure-monitor/app/availability-standard-tests)

---

## 📚 Recommended Reading

- [Azure Monitor 101: The Missing Guide to Understanding Monitoring on Azure](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-monitor-101-the-missing-guide-to-understanding-monitoring-on-azure/4462799) — Comprehensive intro to Azure Monitor's data platform, agents, and alerting
- [The Importance of Setting Up Service and Resource Health Monitoring in Azure](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/the-importance-of-setting-up-service-and-resource-health-monitoring-in-azure/4372478) — Proactively detect Azure platform issues affecting your workloads
- [Azure Workbooks: Advanced Customization and Data Visualization](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-workbooks-advanced-customization-and-data-visualization-in-azure/4369588) — Building interactive dashboards with parametric queries and cross-resource visualizations
