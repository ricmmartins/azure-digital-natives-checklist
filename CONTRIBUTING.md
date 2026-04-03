---
title: Contributing
nav_order: 5
---

# Contributing to the Azure Digital Natives Guide

We welcome contributions that make this guide more useful for startups and digital-native companies building on Azure. Whether you're fixing a broken link, adding a missing best practice, or improving existing guidance — your contributions help the community.

## Ways to Contribute

### Report issues
Found an error, outdated link, or missing topic? [Open an issue](https://github.com/ricmmartins/azure-digital-natives-checklist/issues) describing what needs to change.

### Suggest enhancements
Have an idea for a new checklist item, comparison table, or reference architecture? Open an issue to discuss before submitting a PR.

### Submit a Pull Request
1. Fork [the repository](https://github.com/ricmmartins/azure-digital-natives-checklist).
2. Create a branch (`git checkout -b feature/your-improvement`).
3. Make your changes following the content guidelines below.
4. Test locally with `bundle exec jekyll serve` if possible.
5. Submit a Pull Request against `main`.

## Content Guidelines

### Structure
The documentation is organized into 6 categories: **Foundation**, **Day 2 Operations**, **Build & Deploy**, **Compute & Apps**, **Data & AI**, and **Architecture & Strategy**. When adding a new page, place it under the appropriate category by setting `parent:` and `grand_parent: Docs` in the frontmatter.

Every doc page follows a consistent format for each checklist item:

- **`- [ ] Item title`** — The actionable item (matches the checklist)
- **Why:** One paragraph explaining why this matters for a startup/digital-native company
- **How:** Practical implementation guidance — not theory, but what to actually do
- **Resources:** Links to official Microsoft/Azure documentation (prefer `learn.microsoft.com`)
- **Quick check (optional):** A one-liner Azure CLI command to verify the current state

### Tone and style
- **Opinionated but fair** — recommend a default, explain the trade-offs
- **Startup-friendly** — assume the reader is smart but may not have deep Azure experience
- **Actionable** — every section should answer "what do I do next?"
- **Concise** — respect the reader's time; link to official docs for deep dives instead of duplicating content

### Quality bar
- All links should point to official Microsoft documentation (`learn.microsoft.com`, `docs.github.com`) or reputable sources
- Include at least 2 resource links per item
- Avoid screenshots (they go stale fast) — prefer CLI commands and configuration guidance
- Keep language neutral and inclusive

### Checklist sync
If you add a new item to a doc page, add the corresponding `- [ ]` entry to `CHECKLIST.md` in the matching section with a `[Learn More]` link.

## Code of Conduct

This project follows the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/). Be respectful and constructive in all interactions.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).

---

Thank you for helping make this guide better for the community!
