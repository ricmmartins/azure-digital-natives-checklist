---
title: Networking & Security
parent: Docs
nav_order: 2
---

# Documentation: Networking & Security

This document provides further details and context for the Networking & Security section of the Azure Digital Natives Guide.

- [ ] **Design VNets, Subnets, and Network Security Groups (NSGs) thoughtfully**

*   **Why:** A well-designed network foundation is critical for security, performance, and scalability. Poor planning can lead to complex rework later.
*   **How:** Define address spaces that don't overlap with on-premises or other cloud networks. Segment workloads into appropriate subnets (e.g., web tier, app tier, data tier). Use NSGs to filter traffic between subnets and to/from the internet/on-premises, applying the principle of least privilege.
*   **Resources:**
    *   [Azure Virtual Network concepts and best practices](https://learn.microsoft.com/en-us/azure/virtual-network/concepts-and-best-practices)
    *   [Network security groups](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)

- [ ] **Plan VNet architecture early**

*   **Why:** Even simple deployments benefit from considering future needs like VNet peering, VPN/ExpressRoute connectivity, and hub-spoke topologies. Planning avoids costly re-architecting.
*   **How:** Consider if you'll need connectivity between multiple VNets (peering) or to on-premises networks (VPN Gateway/ExpressRoute). Evaluate if a hub-spoke model makes sense for centralizing shared services (like firewalls or domain controllers).
*   **Resources:**
    *   [Plan virtual networks](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-vnet-plan-design-arm)
    *   [Hub-spoke network topology in Azure](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/hybrid-networking/hub-spoke)

- [ ] **Enable Microsoft Defender for Cloud**

*   **Why:** Defender for Cloud provides security posture management and threat detection across your Azure (and potentially hybrid/multi-cloud) resources. The free tier offers valuable security recommendations and assessments.
*   **How:** Enable Defender for Cloud at the subscription level. Review the Secure Score and implement recommendations. Consider enabling enhanced security features (paid tier) for advanced threat detection and protection for specific resource types (VMs, Storage, SQL, etc.).
*   **Resources:**
    *   [What is Microsoft Defender for Cloud?](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction)
    *   [Enable Defender for Cloud on your Azure subscriptions](https://learn.microsoft.com/en-us/azure/defender-for-cloud/connect-azure-subscription)

- [ ] **Deploy Azure Firewall and DDoS Protection where appropriate**

*   **Why:** Azure Firewall provides centralized network traffic filtering (L3-L7) for your VNets. Azure DDoS Network Protection offers enhanced mitigation against volumetric and protocol-based DDoS attacks beyond the basic infrastructure protection.
*   **How:** Consider deploying Azure Firewall in a central hub VNet to inspect traffic entering/leaving your Azure environment or between spokes. Evaluate the need for Azure DDoS Network Protection based on the criticality and public exposure of your applications.
*   **Resources:**
    *   [What is Azure Firewall?](https://learn.microsoft.com/en-us/azure/firewall/overview)
    *   [Azure DDoS Network Protection overview](https://learn.microsoft.com/en-us/azure/ddos-protection/ddos-protection-overview)

- [ ] **Minimize public IP exposure**

*   **Why:** Every public IP address represents a potential attack surface. Limiting public exposure reduces risk.
*   **How:** Use Private Endpoints as the preferred approach to securely connect to PaaS services (Storage, SQL DB, Key Vault, etc.) over the Azure private network. Private Endpoints provide full private IP connectivity and are recommended over Service Endpoints, which only restrict access to a VNet but still route traffic over the Microsoft backbone (not a true private connection). Place resources like VMs behind load balancers or Application Gateways instead of assigning them direct public IPs.
*   **Resources:**
    *   [What is Azure Private Endpoint?](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview)
    *   [Virtual Network service endpoints](https://learn.microsoft.com/en-us/azure/virtual-network/virtual-network-service-endpoints-overview)

- [ ] **Secure secrets with Azure Key Vault and Managed Identities**

*   **Why:** Key Vault provides a secure, centralized store for application secrets, keys, and certificates. Combining it with Managed Identities allows Azure services to access Key Vault securely without needing credentials stored in code.
*   **How:** Store connection strings, API keys, certificates, etc., in Azure Key Vault. Grant Managed Identities of your applications (e.g., App Service, Functions, VMs) access permissions (Get Secrets, etc.) to the Key Vault using access policies or Azure RBAC for Key Vault.
*   **Resources:**
    *   [About Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
    *   [Use Key Vault references for App Service and Azure Functions](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)
    *   [Authenticate to Key Vault using Managed Identity](https://learn.microsoft.com/en-us/azure/key-vault/general/managed-identity)
    *   *(From article)* [Building a Secure & Scalable Foundation](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/building-a-secure-and-scalable-foundation-for-your-startup-on-azure/4146456)

- [ ] **Deploy Azure Web Application Firewall (WAF)**

*   **Why:** Web applications are constantly targeted by OWASP Top 10 attacks (SQL injection, XSS, etc.). WAF provides centralized protection without modifying application code.
*   **How:** Deploy WAF on Azure Application Gateway or Azure Front Door. Start with Detection mode to assess impact, then switch to Prevention mode. Use managed rule sets (OWASP 3.2, Bot Manager) and add custom rules for application-specific patterns. Review WAF logs regularly to tune rules and reduce false positives.
*   **Resources:**
    *   [What is Azure Web Application Firewall?](https://learn.microsoft.com/en-us/azure/web-application-firewall/overview)
    *   [WAF on Application Gateway](https://learn.microsoft.com/en-us/azure/web-application-firewall/ag/ag-overview)
    *   [WAF on Azure Front Door](https://learn.microsoft.com/en-us/azure/web-application-firewall/afds/afds-overview)

- [ ] **Configure Azure DNS and DNS security**

*   **Why:** DNS is foundational to every application. Misconfigurations cause outages, and DNS attacks can redirect traffic to malicious endpoints.
*   **How:** Use Azure DNS for hosting your domains with high availability and fast resolution. Implement DNS Private Zones for internal name resolution in VNets. Consider Azure DNS Private Resolver for hybrid DNS scenarios. Enable DNSSEC where supported and monitor DNS query logs.
*   **Resources:**
    *   [Azure DNS overview](https://learn.microsoft.com/en-us/azure/dns/dns-overview)
    *   [Azure Private DNS zones](https://learn.microsoft.com/en-us/azure/dns/private-dns-overview)
    *   [Azure DNS Private Resolver](https://learn.microsoft.com/en-us/azure/dns/dns-private-resolver-overview)

- [ ] **Enable NSG flow logs and traffic analytics**

*   **Why:** Without network flow visibility, you cannot detect anomalous traffic patterns, unauthorized access attempts, or debug connectivity issues.
*   **How:** Enable NSG flow logs v2 for all production NSGs and send them to a Storage Account. Enable Traffic Analytics for visual insights into traffic patterns, top talkers, and security threats. Set retention to at least 90 days for compliance and investigation purposes.
*   **Resources:**
    *   [NSG flow logs overview](https://learn.microsoft.com/en-us/azure/network-watcher/nsg-flow-logs-overview)
    *   [Traffic Analytics](https://learn.microsoft.com/en-us/azure/network-watcher/traffic-analytics)

