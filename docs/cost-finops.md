---
title: Cost Management & FinOps
parent: Docs
nav_order: 4
---

# Documentation: Cost Management & FinOps

This document provides further details and context for the Cost Management & FinOps section of the Azure Digital Natives Guide.

- [ ] **Utilize Azure Cost Management + Billing**

*   **Why:** Understanding where your Azure spend is going is fundamental. Azure Cost Management provides tools to monitor, analyze, and optimize your costs.
*   **How:** Regularly access the Cost Management + Billing section in the Azure portal. Use cost analysis tools to break down costs by service, resource group, tag, location, etc. Set up scheduled exports for offline analysis if needed.
*   **Resources:**
    *   [What is Azure Cost Management + Billing?](https://learn.microsoft.com/en-us/azure/cost-management-billing/cost-management-billing-overview)
    *   [Quickstart: Explore and analyze costs with cost analysis](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/quick-acm-cost-analysis)

- [ ] **Set up budgets and spending alerts**

*   **Why:** Budgets act as spending limits or targets, and alerts provide early warnings when costs are approaching or exceeding these thresholds. This prevents unexpected billing surprises.
*   **How:** Create budgets at different scopes (subscription, resource group). Define budget amounts and time periods (monthly, quarterly, annually). Configure alert thresholds (e.g., at 80%, 100% of budget) and specify recipients for notifications (email, action group).
*   **Resources:**
    *   [Tutorial: Create and manage Azure budgets](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/tutorial-acm-create-budgets)
    *   [Use cost alerts to monitor usage and spending](https://learn.microsoft.com/en-us/azure/cost-management-billing/costs/cost-mgt-alerts-monitor-usage-spending)

- [ ] **Regularly review Azure Advisor recommendations**

*   **Why:** Azure Advisor is a free service that analyzes your resource configuration and usage telemetry to provide personalized recommendations for optimizing cost, performance, reliability, operational excellence, and security.
*   **How:** Access Azure Advisor regularly through the Azure portal. Review recommendations, especially in the "Cost" category. Evaluate the potential savings and implementation effort for each suggestion.
*   **Resources:**
    *   [Introduction to Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-overview)
    *   [Optimize Azure costs with Azure Advisor](https://learn.microsoft.com/en-us/azure/advisor/advisor-cost-recommendations)

- [ ] **Evaluate cost optimization options**

*   **Why:** Azure offers several pricing models and purchasing options that can significantly reduce costs for predictable workloads.
*   **How:**
    *   **Azure Reservations:** Commit to a one- or three-year plan for specific resources (like VMs, SQL Database capacity) in exchange for significant discounts compared to pay-as-you-go pricing.
    *   **Azure Savings Plans:** Commit to a fixed hourly spend on compute services for one or three years to receive discounts.
    *   **Spot Virtual Machines:** Utilize Azure's unused compute capacity at very low prices for workloads that can tolerate interruptions (e.g., batch processing, dev/test environments).
*   **Resources:**
    *   [What are Azure Reservations?](https://learn.microsoft.com/en-us/azure/cost-management-billing/reservations/save-compute-costs-reservations)
    *   [What are Azure savings plans for compute?](https://learn.microsoft.com/en-us/azure/cost-management-billing/savings-plan/savings-plan-overview)
    *   [Use Azure Spot Virtual Machines](https://learn.microsoft.com/en-us/azure/virtual-machines/spot-vms)

- [ ] **Understand FinOps basics**

*   **Why:** FinOps is a cultural practice that brings financial accountability to the variable spend model of the cloud, enabling teams to make informed trade-offs between speed, cost, and quality.
*   **How:** Familiarize your team with FinOps principles: collaboration between finance, tech, and business teams; visibility into cloud spending; accountability for costs; and ongoing optimization.
*   **Resources:**
    *   [What is FinOps? (Azure Documentation)](https://learn.microsoft.com/en-us/azure/cost-management-billing/finops/)
    *   [FinOps Foundation](https://www.finops.org/)
    *   *(From article)* [FinOps Toolkit](https://microsoft.github.io/finops-toolkit/)
    *   *(From article)* [Slash Your Azure Bill – Tips for Startups](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/slash-your-azure-bill-top-tips-for-startups/4141839)

- [ ] **Use Dev/Test pricing and subscriptions**

*   **Why:** Non-production environments don't need production pricing. Azure Dev/Test subscription offers provide discounted rates on many services, and burstable VM sizes keep dev/test compute costs low while still providing adequate performance for development workloads.
*   **How:** Use Azure Dev/Test subscription offers (available through Visual Studio subscriptions) to get discounted rates on Azure services for non-production workloads. Use B-series burstable VMs for dev/test environments — they provide a cost-effective baseline with the ability to burst when needed, rather than paying for sustained high-performance compute that dev/test rarely requires.
*   **Resources:**
    *   [What is the Azure Dev/Test offer?](https://learn.microsoft.com/azure/devtest/offer/overview-what-is-devtest-offer-visual-studio)
    *   [B-series burstable VM sizes](https://learn.microsoft.com/azure/virtual-machines/sizes/general-purpose/b-family)

- [ ] **Enable auto-shutdown for non-production resources**

*   **Why:** Dev/test VMs and clusters running 24/7 waste money when developers only work 8–10 hours a day. Auto-shutdown can reduce non-production compute costs by 60–70% with minimal effort.
*   **How:** Enable auto-shutdown on Azure VMs directly from the VM's Operations menu in the portal — set a shutdown time and optional notification. Use Azure DevTest Labs for more comprehensive scheduled start/stop policies across groups of VMs. For Kubernetes dev/test workloads, use the AKS cluster start/stop feature to completely deallocate clusters outside of business hours.
*   **Resources:**
    *   [Configure auto-shutdown for VMs in DevTest Labs](https://learn.microsoft.com/azure/devtest-labs/devtest-lab-auto-shutdown)
    *   [Stop and start an AKS cluster](https://learn.microsoft.com/azure/aks/start-stop-cluster)

