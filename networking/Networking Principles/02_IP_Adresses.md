## 2. IP Addressing & Subnetting

### Overview

IP addressing is fundamental to identifying devices on a network. Subnetting divides a network into smaller, manageable segments, enhancing efficiency and security.

### IPv4 vs. IPv6

#### IPv4

- **Address Format:** 32-bit numeric address written as four decimal numbers separated by dots (e.g., 192.168.1.1).
- **Address Space:** Approximately 4.3 billion unique addresses.
- **Address Classes:** A, B, C, D, E.
- **Notation:** Dotted-decimal.

**Advantages:**

- Widely implemented and supported.```bash
RouterA# configure terminal
RouterA(config)# router ospf 1
RouterA(config-router)# network 192.168.1.0 0.0.0.255 area 0
RouterA(config-router)# exit
RouterA(config)# exit
RouterA# write memory
- Simpler addressing structure.

**Disadvantages:**

- Limited address space leading to exhaustion.
- Requires Network Address Translation (NAT) for multiple devices.

#### IPv6

- **Address Format:** 128-bit alphanumeric address written as eight groups of four hexadecimal digits separated by colons (e.g., 2001:0db8:85a3:0000:0000:8a2e:0370:7334).
- **Address Space:** 3.4×10^38 unique addresses.
- **Notation:** Hexadecimal, with rules to abbreviate consecutive zeros.
- **No Classes:** Uses hierarchical addressing.

**Advantages:**

- Vast address space eliminates exhaustion.
- Simplified header for efficient routing.
- Built-in security features (IPSec).

**Disadvantages:**

- More complex addressing structure.
- Transition from IPv4 requires compatibility mechanisms.

### Subnet Masks and CIDR Notation

#### Subnet Masks

A subnet mask separates the IP address into network and host portions.

- **IPv4 Example:** For IP `192.168.1.10` with subnet mask `255.255.255.0`:
  - **Network Portion:** `192.168.1`
  - **Host Portion:** `10`

#### CIDR Notation

Classless Inter-Domain Routing (CIDR) represents IP addresses and their associated routing prefix.

- **Format:** `IP_address/Prefix_length` (e.g., `192.168.1.0/24`).
- **Prefix Length:** Number of bits used for the network portion.
  - `/24` implies the first 24 bits are the network part.

**Benefits:**

- Flexible allocation of IP addresses.
- Reduces the size of routing tables.

### Private vs. Public IP Addresses

#### Private IP Addresses

- **Ranges:**
  - **Class A:** 10.0.0.0 – 10.255.255.255
  - **Class B:** 172.16.0.0 – 172.31.255.255
  - **Class C:** 192.168.0.0 – 192.168.255.255
- **Usage:** Within private networks; not routable on the public Internet.
- **Purpose:** Conserves public IP addresses; enhances security.

#### Public IP Addresses

- **Range:** Any IP address not reserved for private use.
- **Usage:** Accessible over the Internet.
- **Assignment:** Allocated by Internet Service Providers (ISPs) or regional registries.

### Subnetting

Subnetting divides a larger network into smaller subnetworks, improving management and security.

#### Benefits of Subnetting

- **Improved Performance:** Reduces broadcast domains.
- **Enhanced Security:** Isolates network segments.
- **Efficient IP Utilization:** Minimizes wasted IP addresses.

#### How Subnetting Works

1. **Determine Requirements:**
   - Number of subnets needed.
   - Number of hosts per subnet.

2. **Calculate Subnet Mask:**
   - Use the formula `2^n` to determine the number of subnets (`n` is the number of bits borrowed from the host portion).
   - Example: For 4 subnets, borrow 2 bits (`2^2 = 4`).

3. **Apply Subnet Mask:**
   - Convert the borrowed bits into binary and apply to the original subnet mask.

4. **Define Subnets:**
   - Assign IP ranges to each subnet based on the new subnet mask.

#### Example

**Given:**

- Network: `192.168.1.0/24`
- Requirement: 4 subnets.

**Steps:**

1. **Calculate Bits Borrowed:** 
   - `2^2 = 4` subnets → Borrow 2 bits.

2. **New Subnet Mask:**
   - Original: `/24` (255.255.255.0)
   - Borrowed: 2 bits → `/26` (255.255.255.192)

3. **Define Subnets:**
   - **Subnet 1:** `192.168.1.0/26` (Hosts: 1-62)
   - **Subnet 2:** `192.168.1.64/26` (Hosts: 65-126)
   - **Subnet 3:** `192.168.1.128/26` (Hosts: 129-190)
   - **Subnet 4:** `192.168.1.192/26` (Hosts: 193-254)

**Note:** Addresses ending in `.0`, `.64`, `.128`, `.192` are network addresses; `.63`, `.127`, `.191`, `.255` are broadcast addresses.

### Practical Tools

- **Subnet Calculators:** Online tools to simplify subnetting.
- **CIDR Notation Converters:** Convert between CIDR and subnet masks.

### Best Practices

- **Plan Ahead:** Anticipate network growth to allocate sufficient subnets and host addresses.
- **Use VLSM (Variable Length Subnet Mask):** Allocate different subnet masks based on subnet size requirements.
- **Document Subnets:** Maintain records of subnet allocations for management and troubleshooting.

---

