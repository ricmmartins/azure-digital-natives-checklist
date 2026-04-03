---
title: Well-Architected Framework
parent: Docs
nav_order: 10
---

# Documentation: Azure Well-Architected Framework

This document provides further details and context for adopting the Azure Well-Architected Framework as a foundation for building and operating workloads on Azure.

- [ ] **Understand the five pillars of the Well-Architected Framework**

*   **Why:** The Well-Architected Framework defines five pillars — Reliability, Security, Cost Optimization, Operational Excellence, and Performance Efficiency — that provide a structured approach to building high-quality workloads. For digital-native companies, understanding these pillars early prevents costly rearchitecture later and ensures your cloud foundation scales with your business.
*   **How:** Familiarize your engineering and architecture teams with each pillar. Reliability ensures workloads recover from failures and meet availability commitments. Security protects data and systems from threats. Cost Optimization maximizes the value of cloud spend. Operational Excellence streamlines deployment and monitoring processes. Performance Efficiency ensures workloads meet demand efficiently.
*   **Resources:**
    *   [Azure Well-Architected Framework overview](https://learn.microsoft.com/en-us/azure/well-architected/)
    *   [Pillars of the Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/pillars)

- [ ] **Run the Well-Architected Review**

*   **Why:** The Azure Well-Architected Review is an assessment tool that evaluates your workloads against the framework pillars and produces actionable recommendations. Running this assessment gives you a concrete, prioritized list of improvements rather than relying on assumptions about your architecture's quality.
*   **How:** Navigate to the Azure Well-Architected Review tool and complete the assessment for each critical workload. Answer the questions honestly to get the most useful recommendations. Review the generated report with your team and prioritize findings by impact and effort.
*   **Resources:**
    *   [Azure Well-Architected Review](https://learn.microsoft.com/en-us/assessments/azure-architecture-review/)
    *   [Azure Well-Architected Framework review - Overview](https://learn.microsoft.com/en-us/azure/well-architected/cross-cutting-guides/implementing-recommendations)

- [ ] **Align architecture decisions with WAF pillars**

*   **Why:** Every infrastructure and application design decision has implications across the five pillars. Without a deliberate framework, teams make ad-hoc choices that optimize for one concern (e.g., performance) while unknowingly degrading another (e.g., cost or security). Using WAF as a decision framework ensures trade-offs are made consciously and documented.
*   **How:** When making architecture decisions — such as choosing a compute service, designing a data tier, or configuring networking — explicitly map the decision to the relevant WAF pillar(s). Document the trade-offs considered. Use the WAF design principles and checklists as a reference during architecture reviews and design sessions.
*   **Resources:**
    *   [Design principles - Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/pillars)
    *   [Azure Well-Architected Framework - Trade-offs](https://learn.microsoft.com/en-us/azure/well-architected/reliability/tradeoffs)

- [ ] **Leverage Azure Advisor for WAF recommendations**

*   **Why:** Azure Advisor is a free, built-in cloud consultant that continuously analyzes your resource configuration and usage telemetry to provide personalized recommendations aligned with the WAF pillars. It surfaces actionable improvements you might otherwise miss, from right-sizing underutilized VMs to enabling security best practices.
*   **How:** Access Azure Advisor from the Azure portal. Review recommendations across all five categories: Reliability, Security, Cost, Operational Excellence, and Performance. Set up Advisor alerts to be notified of new high-impact recommendations. Integrate Advisor recommendations into your team's regular operational review cadence.
*   **Resources:**
    *   [Introduction to Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview)
    *   [Azure Advisor score](https://learn.microsoft.com/en-us/azure/advisor/azure-advisor-score)

- [ ] **Use WAF service guides for specific Azure services**

*   **Why:** Each Azure service has unique configuration options and best practices that map to the WAF pillars. The WAF service guides provide service-specific guidance that goes beyond general principles, helping you configure individual services (such as Azure Kubernetes Service, Azure SQL, or App Service) for reliability, security, cost, operations, and performance.
*   **How:** When deploying or reviewing any Azure service, consult the corresponding WAF service guide. Use the guide's recommendations and configuration checklists to ensure the service is aligned with your workload's requirements across all five pillars.
*   **Resources:**
    *   [Azure Well-Architected Framework service guides](https://learn.microsoft.com/en-us/azure/well-architected/service-guides/)
    *   [Azure Well-Architected Framework - Workloads](https://learn.microsoft.com/en-us/azure/well-architected/workloads)
