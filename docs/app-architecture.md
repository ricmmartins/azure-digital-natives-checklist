---
title: Application Architecture
parent: Compute & Apps
grand_parent: Docs
nav_order: 1
description: Compute service selection, resilience patterns, API Management, messaging and eventing, caching, and reference architecture patterns.
---

# Documentation: Application Architecture

This document provides further details and context for the Application Architecture section of the Azure Digital Natives Guide.

- [ ] **Choose the right Azure compute service**

*   **Why:** Azure offers multiple compute services, each suited to different application patterns and operational requirements. Choosing the wrong service can result in over-engineering, excessive costs, or insufficient capability as your application scales.
*   **How:** Use Azure App Service for PaaS web applications and APIs where you want a fully managed platform with built-in deployment, scaling, and patching. Use Azure Container Apps for serverless container workloads that need Dapr integration, KEDA-driven scaling, or microservice architectures without managing Kubernetes. Use Azure Functions for event-driven, short-lived compute tasks such as processing queue messages, timers, or webhooks. Use Azure Kubernetes Service (AKS) when you need full Kubernetes orchestration, custom networking, or fine-grained control over your container infrastructure. Consult the Azure compute decision tree to validate your choice.
*   **Resources:**
    *   [Choose an Azure compute service](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/compute-decision-tree)
    *   [Azure App Service overview](https://learn.microsoft.com/en-us/azure/app-service/overview)
    *   [Azure Container Apps overview](https://learn.microsoft.com/en-us/azure/container-apps/overview)
    *   [Introduction to Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview)
    *   [Azure Kubernetes Service overview](https://learn.microsoft.com/en-us/azure/aks/what-is-aks)

- [ ] **Design for resilience with retry patterns and circuit breakers**

*   **Why:** Cloud applications depend on distributed services that can experience transient faults—temporary network glitches, throttled requests, or brief service unavailability. Without proper fault handling, a single transient failure can cascade into a complete application outage.
*   **How:** Implement retry policies with exponential backoff for all calls to external services and Azure resources. Use the circuit breaker pattern to stop calling a failing dependency after a threshold of errors, giving it time to recover. Implement bulkhead isolation to prevent failures in one component from consuming all resources. Consider using libraries like Polly (.NET) or resilience4j (Java) that provide these patterns out of the box.
*   **Resources:**
    *   [Retry pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/retry)
    *   [Circuit Breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
    *   [Bulkhead pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead)
    *   [Transient fault handling](https://learn.microsoft.com/en-us/azure/architecture/best-practices/transient-faults)

- [ ] **Implement API management for your services**

*   **Why:** As your application grows into multiple services exposing APIs, you need a centralized gateway to enforce consistent authentication, rate limiting, versioning, and monitoring. Without API management, each service must implement these cross-cutting concerns independently, leading to inconsistency and duplicated effort.
*   **How:** Deploy Azure API Management as a gateway in front of your backend APIs. Configure policies for rate limiting, request validation, and response caching. Use API Management's built-in OAuth 2.0 and OpenID Connect integration for authentication. Implement API versioning strategies to manage breaking changes. Use the developer portal to publish API documentation for internal and external consumers.
*   **Resources:**
    *   [About Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts)
    *   [Policies in Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-policies)
    *   [Protect an API in Azure API Management using OAuth 2.0](https://learn.microsoft.com/en-us/azure/api-management/api-management-howto-protect-backend-with-aad)
    *   [Versions in Azure API Management](https://learn.microsoft.com/en-us/azure/api-management/api-management-versions)

- [ ] **Use asynchronous messaging for loosely coupled architectures**

*   **Why:** Synchronous, point-to-point communication between services creates tight coupling—if one service is slow or unavailable, all dependent services are affected. Asynchronous messaging decouples services so they can operate independently, improving resilience, scalability, and the ability to evolve services independently.
*   **How:** Use Azure Service Bus for enterprise messaging scenarios requiring guaranteed delivery, FIFO ordering, transactions, and dead-letter queues. Use Azure Event Grid for event-driven routing, where you need to react to state changes across Azure resources or custom applications using a publish-subscribe model. Consider Azure Event Hubs for high-throughput event streaming scenarios such as telemetry ingestion or log aggregation.
*   **Resources:**
    *   [Azure Service Bus messaging overview](https://learn.microsoft.com/en-us/azure/service-bus-messaging/service-bus-messaging-overview)
    *   [What is Azure Event Grid?](https://learn.microsoft.com/en-us/azure/event-grid/overview)
    *   [Azure Event Hubs overview](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about)
    *   [Asynchronous messaging options in Azure](https://learn.microsoft.com/en-us/azure/architecture/guide/technology-choices/messaging)

- [ ] **Follow the Azure Architecture Center reference architectures**

*   **Why:** Reference architectures provide proven, battle-tested designs for common application patterns on Azure. Starting from a reference architecture reduces the risk of architectural mistakes, accelerates development, and ensures your design follows Azure best practices and the Well-Architected Framework.
*   **How:** Browse the Azure Architecture Center for reference architectures that match your application scenario—whether it is a web application, microservices, data pipeline, or IoT solution. Use these architectures as starting points and adapt them to your specific requirements. Review the associated Well-Architected Framework pillars (reliability, security, cost optimization, operational excellence, and performance efficiency) to ensure your design is balanced.
*   **Resources:**
    *   [Azure Architecture Center](https://learn.microsoft.com/en-us/azure/architecture/)
    *   [Azure application architecture fundamentals](https://learn.microsoft.com/en-us/azure/architecture/guide/)
    *   [Microsoft Azure Well-Architected Framework](https://learn.microsoft.com/en-us/azure/well-architected/)
    *   [Cloud design patterns](https://learn.microsoft.com/en-us/azure/architecture/patterns/)
