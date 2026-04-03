---
title: Azure OpenAI
parent: Docs
nav_order: 8
---

# Documentation: Azure AI Services

This document provides further details and context for the Azure AI section of the Azure Digital Natives Guide.

- [ ] **Review AOAI best practices**

*   **Why:** Leveraging large language models (LLMs) effectively requires understanding best practices for prompt engineering, model selection, security, and responsible AI.
*   **How:** Familiarize yourself with Azure OpenAI documentation covering key concepts, model capabilities (GPT-4o, GPT-4.1, o-series reasoning models, Embeddings, DALL-E), and recommended patterns.
*   **Resources:**
    *   [Azure OpenAI Service documentation](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/)
    *   [Introduction to prompt engineering](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/prompt-engineering)
    *   [Transparency Note for Azure OpenAI Service](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/transparency-note)
    *   [Everything you need to know about reasoning models (O1, O3, O4, Mini, and beyond)](https://techcommunity.microsoft.com/blog/azure-ai-services-blog/everything-you-need-to-know-about-reasoning-models-o1-o3-o4-mini-and-beyond/4406846)
    *   *(From article)* [AOAI Best Practices](https://techcommunity.microsoft.com/blog/startupsatmicrosoftblog/azure-openai-best-practices-a-quick-reference-guide-to-optimize-your-deployments/4403546)

- [ ] **Follow guidance for using your own data with AOAI**

*   **Why:** Retrieval-Augmented Generation (RAG) patterns allow you to ground LLM responses in your specific data, improving relevance and accuracy. Implementing this securely and effectively is crucial.
*   **How:** Explore Azure OpenAI's "on your data" feature or implement custom RAG solutions using services like Azure AI Search to index your data and provide relevant context to the LLM during generation.
*   **Resources:**
    *   [Azure OpenAI on your data](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/use-your-data)
    *   [Retrieval Augmented Generation (RAG) in Azure AI Search](https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview)

- [ ] **Understand AOAI data processing and storage**

*   **Why:** It's essential to know how your prompts, completions, embeddings, and training data (if applicable for fine-tuning) are processed and stored by the Azure OpenAI service to meet compliance and privacy requirements.
*   **How:** Review the official Azure OpenAI data privacy and security documentation.
*   **Resources:**
    *   [Data, privacy, and security for Azure OpenAI Service](https://learn.microsoft.com/en-us/legal/cognitive-services/openai/data-privacy)

- [ ] **Monitor AOAI data residency, concurrency, and cost**

*   **Why:** As you scale your use of AOAI, these operational factors become critical.
*   **How:**
    *   **Data Residency:** Understand where your data is processed and stored based on the Azure region you deploy AOAI to.
    *   **Concurrency:** Monitor token usage (Prompt + Completion tokens) and manage quotas (Tokens-Per-Minute, Requests-Per-Minute) to ensure your application scales appropriately. Implement retry logic and potentially provisioned throughput for high-scale scenarios.
    *   **Cost:** Track token consumption closely as it directly impacts cost. Optimize prompts and leverage different models based on cost/performance trade-offs.
*   **Resources:**
    *   [Azure OpenAI Service quotas and limits](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/quotas-limits)
    *   [Monitor Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/monitor-openai)
    *   [Azure OpenAI Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/openai-service/)

- [ ] **Implement Responsible AI practices**

*   **Why:** AI systems can produce harmful, biased, or inaccurate content. Responsible AI practices ensure your applications are fair, transparent, and safe for users.
*   **How:** Enable content filtering on Azure OpenAI deployments. Implement human-in-the-loop patterns for high-stakes decisions. Review the Microsoft Responsible AI Standard and apply it to your AI workloads. Use Azure AI Content Safety to detect harmful content.
*   **Resources:**
    *   [Microsoft Responsible AI Standard](https://learn.microsoft.com/en-us/azure/ai-services/responsible-use-of-ai-overview)
    *   [Content filtering in Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/content-filter)
    *   [Azure AI Content Safety](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview)

- [ ] **Explore Azure AI Foundry for end-to-end AI development**

*   **Why:** Azure AI Foundry provides a unified platform for building, evaluating, and deploying AI applications, including model catalog, prompt flow, and evaluation tools — going beyond raw model access.
*   **How:** Use Azure AI Foundry to explore the model catalog, build prompt flows for orchestration, evaluate model outputs for quality and safety, and deploy AI solutions with built-in monitoring.
*   **Resources:**
    *   [What is Azure AI Foundry?](https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-ai-foundry)
    *   [Azure AI Search for RAG patterns](https://learn.microsoft.com/en-us/azure/search/search-what-is-azure-search)
    *   [Semantic Kernel overview](https://learn.microsoft.com/en-us/semantic-kernel/overview/)

