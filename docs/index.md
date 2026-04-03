---
title: Docs
nav_order: 3
has_children: true
description: Deep-dive documentation for every section of the Azure Digital Natives Checklist — Why it matters, How to implement it, and links to official Azure resources.
---

# Documentation

Deep-dive guidance for every section of the [Azure Digital Natives Checklist](../CHECKLIST). Each page follows a consistent format: **Why** it matters, **How** to implement it, and **Resources** with links to official Azure documentation.

## Foundation

Get these right first — identity, networking, and resource organization form the bedrock of every Azure environment.

- [Identity & Access Management](/docs/identity-access) — Entra ID, RBAC, managed identities, MFA, conditional access, and workload federation.
- [Networking & Security](/docs/networking-security) — VNets, NSGs, firewalls, private endpoints, Key Vault, WAF, DNS, and flow logs.
- [Resource Management](/docs/resource-management) — Organization strategy, tagging, naming, locks, Resource Graph, and quotas.

## Day 2 Operations

Keep your environment healthy, compliant, and cost-efficient as you scale.

- [Cost Management & FinOps](/docs/cost-finops) — Cost analysis, budgets, Advisor, reservations, FinOps, and dev/test pricing.
- [Monitoring & Observability](/docs/monitoring-observability) — Azure Monitor, health signals, workbooks, alerts, MELT, OpenTelemetry, and Grafana.
- [Compliance & Governance](/docs/compliance-governance) — Azure Policy, management groups, regulatory compliance, Defender for Cloud, and Purview.
- [SLA & SLO Management](/docs/sla-slo) — Azure SLAs, composite SLAs, SLOs/SLIs, error budgets, and SLO monitoring.
- [Disaster Recovery & Business Continuity](/docs/disaster-recovery) — RPO/RTO, Azure Backup, Site Recovery, availability zones, and PaaS DR.

## Build & Deploy

Automate everything — ship reliably, securely, and repeatably.

- [Infrastructure as Code](/docs/infrastructure-as-code) — Bicep, Terraform, CI/CD integration, landing zones, AVM, and azd.
- [DevOps & CI/CD](/docs/devops-cicd) — Pipelines, IaC automation, deployment strategies, environment promotion, and pipeline security.
- [GitHub Integration](/docs/github-integration) — GitHub Actions, OIDC federation, GHAS, Copilot, and branch protection.
- [Platform Engineering](/docs/platform-engineering) — Internal developer platforms, deployment environments, golden paths, azd, and developer metrics.

## Compute & Apps

Choose the right compute, design for resilience, and optimize for performance.

- [Application Architecture](/docs/app-architecture) — Compute selection, resilience patterns, API management, messaging, and reference architectures.
- [AKS & Application Architecture](/docs/aks-app-architecture) — AKS guidance, fundamentals, monitoring, and best practices.
- [VM Scale Sets](/docs/vm-scale-sets) — Orchestration modes, autoscaling, image management, health monitoring, and security.
- [Performance Efficiency](/docs/performance-efficiency) — Caching, CDN, load testing, database optimization, APM, and auto-scaling.

## Data & AI

Your data layer and AI capabilities — from choosing the right database to building production AI applications.

- [Data Services](/docs/data-services) — Database selection, HA/backups, private access, scalability, and storage strategy.
- [Azure AI Services](/docs/azure-openai) — Azure OpenAI, RAG patterns, data handling, responsible AI, and AI Foundry.

## Architecture & Strategy

Frameworks, patterns, comparisons, and migration playbooks to guide your Azure journey.

- [Well-Architected Framework](/docs/well-architected) — Five pillars, WAF review, Advisor, and service guides.
- [Tech Stack Decisions](/docs/architecture-decisions) — Side-by-side comparisons for AKS vs Container Apps, Bicep vs Terraform, database selection, and more.
- [Reference Architectures](/docs/reference-architectures) — Architecture diagrams for SaaS multi-tenant, event-driven microservices, and RAG AI patterns.
- [Migration Strategies](/docs/migration-strategies) — Azure Migrate, the 5 Rs, database migration, hybrid connectivity, and CAF methodology.
