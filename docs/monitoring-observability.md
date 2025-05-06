---
nav_exclude: true
---

# Documentation: Monitoring & Observability

This document provides further details and context for the Monitoring & Observability section of the Azure Startup Checklist.

## [ ] Enable Azure Monitor

*   **Why:** Azure Monitor provides comprehensive monitoring of your Azure resources and applications, collecting metrics, logs, and traces. Without proper monitoring, you'll be blind to performance issues, errors, and potential security incidents.
*   **How:** Azure Monitor is automatically enabled for basic metrics collection. Configure Log Analytics workspaces to collect and analyze logs from your resources. Enable Application Insights for your applications to collect detailed telemetry.
*   **Resources:**
    *   [Azure Monitor overview](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)
    *   [Create a Log Analytics workspace in the Azure portal](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/quick-create-workspace)
    *   [What is Application Insights?](https://learn.microsoft.com/en-us/azure/azure-monitor/app/app-insights-overview)

## [ ] Utilize Azure Service Health and Resource Health

*   **Why:** Service Health provides personalized alerts and guidance about Azure service issues and planned maintenance that might affect your resources. Resource Health gives you visibility into the health of your specific resources.
*   **How:** Configure Service Health alerts to notify your team about service issues or planned maintenance. Regularly check Resource Health to understand the current and historical health of your resources.
*   **Resources:**
    *   [Azure Service Health overview](https://learn.microsoft.com/en-us/azure/service-health/service-health-overview)
    *   [Resource Health overview](https://learn.microsoft.com/en-us/azure/service-health/resource-health-overview)
    *   [Create activity log alerts on service notifications](https://learn.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications)

## [ ] Create meaningful dashboards with Azure Workbooks

*   **Why:** Workbooks combine text, analytics queries, metrics, and parameters into interactive reports and dashboards. They help visualize complex data and share insights across teams.
*   **How:** Create Workbooks that combine metrics, logs, and other data sources relevant to your applications and infrastructure. Share these Workbooks with stakeholders for a common operational view.
*   **Resources:**
    *   [Azure Monitor Workbooks overview](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-overview)
    *   [Create interactive reports with Azure Monitor Workbooks](https://learn.microsoft.com/en-us/azure/azure-monitor/visualize/workbooks-create-workbook)

## [ ] Configure advanced alerts

*   **Why:** Proactive alerting is essential for identifying and addressing issues before they impact users. Advanced alerts can monitor complex conditions across multiple signals and trigger automated responses.
*   **How:** Define alert rules based on metrics, logs, or activity log events. Configure appropriate thresholds, evaluation frequency, and severity. Set up action groups to notify the right people or trigger automated remediation.
*   **Resources:**
    *   [Overview of alerts in Microsoft Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-overview)
    *   [Create, view, and manage metric alerts](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-metric)
    *   [Create, view, and manage log alerts](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/alerts-log)
    *   [Create and manage action groups](https://learn.microsoft.com/en-us/azure/azure-monitor/alerts/action-groups)

## [ ] Understand and implement MELT (Metrics, Events, Logs, Traces)

*   **Why:** MELT provides a comprehensive approach to observability, covering different aspects of system behavior. Metrics show what's happening, events record what happened, logs provide context, and traces show the path of requests through distributed systems.
*   **How:** Implement a strategy that collects all four types of telemetry:
    *   **Metrics:** Numerical values that describe some aspect of a system at a particular point in time (e.g., CPU usage, request count)
    *   **Events:** Discrete occurrences in your system (e.g., user actions, system state changes)
    *   **Logs:** Text records of events that happened in your system
    *   **Traces:** Records of requests as they flow through distributed systems, showing the path and timing
*   **Resources:**
    *   [Observability in Azure](https://learn.microsoft.com/en-us/azure/architecture/best-practices/observability)
    *   [Distributed tracing in Azure](https://learn.microsoft.com/en-us/azure/azure-monitor/app/distributed-tracing)
    *   *(From article)* [MELT in Azure](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-monitor--melt-a-comprehensive-approach-to-cloud-observability/4251166)
