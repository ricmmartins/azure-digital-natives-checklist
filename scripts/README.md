# Automation Scripts

This directory contains helper scripts (primarily using Azure CLI) designed to assist with implementing or auditing some of the best practices outlined in the main `CHECKLIST.md`.

**Prerequisites:**

*   **Azure CLI:** Most scripts require the Azure CLI to be installed and configured. You need to be logged in (`az login`).
*   **jq:** Some scripts may use `jq` for parsing JSON output from Azure CLI. Install it if needed (e.g., `sudo apt update && sudo apt install jq` on Debian/Ubuntu).
*   **Permissions:** Ensure the identity you are logged in with via Azure CLI has the necessary permissions to read resources or make changes as required by the specific script.

## Scripts

### 1. `check_missing_tags.azcli`

*   **Purpose:** Finds resources within a specified resource group that are missing a specific tag key.
*   **Usage:**
    ```bash
    ./check_missing_tags.azcli <resource_group_name> <tag_name>
    ```
*   **Example:** To find resources in `my-production-rg` missing the `CostCenter` tag:
    ```bash
    ./check_missing_tags.azcli my-production-rg CostCenter
    ```
*   **Output:** Lists the resources (name, ID, type) missing the specified tag in JSON format and provides a summary count.

### 2. `add_nsg_rule.azcli`

*   **Purpose:** Adds or updates a security rule in a specified Network Security Group (NSG).
*   **Usage:**
    ```bash
    ./add_nsg_rule.azcli <rg_name> <nsg_name> <rule_name> <priority> <direction> <access> <protocol> <source_address> <source_port> <dest_address> <dest_port>
    ```
*   **Parameters:**
    *   `rg_name`: Name of the resource group containing the NSG.
    *   `nsg_name`: Name of the Network Security Group.
    *   `rule_name`: Name for the new or updated rule.
    *   `priority`: Rule priority (integer 100-4096).
    *   `direction`: `Inbound` or `Outbound`.
    *   `access`: `Allow` or `Deny`.
    *   `protocol`: `Tcp`, `Udp`, `Icmp`, `Esp`, `Ah`, or `*` (Any).
    *   `source_address`: Source CIDR (e.g., `10.0.0.0/24`), IP address, Service Tag (e.g., `Internet`, `VirtualNetwork`), or `*`.
    *   `source_port`: Source port number or `*`.
    *   `dest_address`: Destination CIDR, IP address, Service Tag, or `*`.
    *   `dest_port`: Destination port number (e.g., `3389`, `22`) or `*`.
*   **Example (Deny RDP from Internet):**
    ```bash
    ./add_nsg_rule.azcli my-app-rg my-app-nsg DenyRDP_Internet 1000 Inbound Deny Tcp Internet "*" "*" 3389
    ```
*   **Example (Allow SSH from specific IP):**
    ```bash
    ./add_nsg_rule.azcli my-app-rg my-app-nsg AllowSSH_Admin 1010 Inbound Allow Tcp 1.2.3.4 "*" "*" 22
    ```
*   **Output:** Confirmation message upon success or error details.

**Disclaimer:** Always test scripts in a non-production environment before running them against production resources. Review the script logic to ensure it meets your specific requirements.
