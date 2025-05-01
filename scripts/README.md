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


### 3. `audit_subscription_owners.azcli`

*   **Purpose:** Lists users and groups assigned the built-in 'Owner' role directly on a specified subscription.
*   **Usage:**
    ```bash
    ./audit_subscription_owners.azcli <subscription_id>
    ```
*   **Example:**
    ```bash
    ./audit_subscription_owners.azcli xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
    ```
*   **Output:** Lists the principal name, type, and ID for each User/Group owner found in JSON format, along with a summary count.

### 4. `find_public_ips_missing_tag.azcli`

*   **Purpose:** Uses Azure Resource Graph to find Public IP Address resources across all accessible subscriptions that are missing a specific tag key.
*   **Usage:**
    ```bash
    ./find_public_ips_missing_tag.azcli <tag_name>
    ```
*   **Example:** To find Public IPs missing the `Environment` tag:
    ```bash
    ./find_public_ips_missing_tag.azcli Environment
    ```
*   **Output:** A table listing the name, resource group, subscription ID, location, and resource ID of the Public IPs missing the specified tag.

### 5. `audit_missing_rg_locks.azcli`

*   **Purpose:** Finds Resource Groups that have a specific tag (e.g., `Environment=Production`) but are missing a `CanNotDelete` lock.
*   **Usage:**
    ```bash
    ./audit_missing_rg_locks.azcli <tag_key> <tag_value>
    ```
*   **Example:** To check Resource Groups tagged `Environment=Production`:
    ```bash
    ./audit_missing_rg_locks.azcli Environment Production
    ```
*   **Output:** A message indicating which tagged Resource Groups are missing the `CanNotDelete` lock, along with a summary count.

### 6. `summarize_costs_by_tag.azcli`

*   **Purpose:** Queries Azure Cost Management to show actual costs grouped by the values of a specific tag key for a given scope (subscription or resource group) and timeframe.
*   **Usage:**
    ```bash
    ./summarize_costs_by_tag.azcli <scope> <tag_key> [timeframe]
    ```
*   **Scope Format:**
    *   Subscription: `/subscriptions/<subscription_id>`
    *   Resource Group: `/subscriptions/<subscription_id>/resourceGroups/<rg_name>`
*   **Timeframe (Optional):** Defaults to `MonthToDate`. Other examples: `TheLastMonth`, `BillingMonthToDate`.
*   **Example (Current month costs by `CostCenter` for a subscription):**
    ```bash
    ./summarize_costs_by_tag.azcli /subscriptions/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx CostCenter
    ```
*   **Output:** A table showing the cost aggregated by each value of the specified tag key.

### 7. `find_unrestricted_nsg_rules.azcli`

*   **Purpose:** Uses Azure Resource Graph to find Network Security Group (NSG) rules that allow inbound traffic from `Any` or `Internet` on potentially risky ports.
*   **Usage:**
    ```bash
    ./find_unrestricted_nsg_rules.azcli [port_list]
    ```
*   **Port List (Optional):** Comma-separated list of destination ports (e.g., `22,3389`). Defaults to common management ports.
*   **Example (Default ports):**
    ```bash
    ./find_unrestricted_nsg_rules.azcli
    ```
*   **Output:** A table listing the NSG name, rule name, priority, protocol, source, destination port, and other details for potentially risky rules found.

### 8. `check_resource_health_alerts.azcli`

*   **Purpose:** Lists Azure Monitor Activity Log Alerts that appear to be configured to trigger based on Resource Health events (specifically checking for the `ResourceHealth` category in the alert condition).
*   **Usage:**
    ```bash
    ./check_resource_health_alerts.azcli [resource_group_name]
    ```
*   **Resource Group (Optional):** Filters alerts to a specific resource group; otherwise, checks the entire subscription.
*   **Example (Subscription scope):**
    ```bash
    ./check_resource_health_alerts.azcli
    ```
*   **Output:** Lists the details of matching alerts found in JSON format. Notes that alerts might be configured differently, so manual review may still be needed for full verification.

