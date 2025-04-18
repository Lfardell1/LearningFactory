

---

## 7. Network Services & Configuration


## Overview

Network services facilitate various functionalities essential for network operations, such as automatic IP assignment, address translation, and secure connections. Proper configuration ensures efficient and secure network performance.

## DHCP (Dynamic Host Configuration Protocol)

### Function

- Automatically assigns IP addresses and other network configuration parameters to devices on a network, enabling them to communicate effectively.

### Components

1. **DHCP Server:** Provides IP addresses and configuration data.
2. **DHCP Client:** Requests and receives configuration data.
3. **DHCP Relay:** Forwards DHCP requests between clients and servers across different subnets.

### DHCP Process

1. **Discover:** Client broadcasts a DHCPDISCOVER message to locate available DHCP servers.
2. **Offer:** DHCP server responds with a DHCPOFFER message, proposing an IP address.
3. **Request:** Client responds with a DHCPREQUEST message, requesting the offered IP.
4. **Acknowledge:** DHCP server sends a DHCPACK message, confirming the IP assignment.

### DHCP Options

- **Subnet Mask**
- **Default Gateway**
- **DNS Servers**
- **Lease Time:** Duration of the IP assignment.

### Static vs. Dynamic DHCP

- **Dynamic DHCP:** Assigns IP addresses from a pool for a limited lease time.
- **Static DHCP (DHCP Reservation):** Assigns a fixed IP address to a specific MAC address.

## NAT (Network Address Translation)

### Function

- Translates private IP addresses within a local network to a single public IP address for external communication, conserving public IP addresses and enhancing security.

### Types of NAT

1. **Static NAT:**
   - One-to-one mapping between a private IP and a public IP.
   - Useful for hosting services accessible from the Internet.

2. **Dynamic NAT:**
   - Maps private IP addresses to a pool of public IP addresses.
   - Assigns available public IPs dynamically as needed.

3. **PAT (Port Address Translation) / NAT Overload:**
   - Multiple private IP addresses share a single public IP address by differentiating traffic based on port numbers.
   - Commonly used in home routers.

### How PAT Works

- **Outbound Traffic:** Private IP and port are translated to public IP and a unique port.
- **Inbound Traffic:** Router uses the port number to determine the corresponding private IP.

### Example Scenario

- **Private Network:** `192.168.1.0/24`
- **Public IP:** `203.0.113.5`

**Outbound Connection:**

- **Device A:** `192.168.1.10:12345` → `203.0.113.5:54321`
- **Device B:** `192.168.1.11:12346` → `203.0.113.5:54322`

**Inbound Connection:**

- **Port 54321:** Routed to `192.168.1.10:12345`
- **Port 54322:** Routed to `192.168.1.11:12346`

## VPN Basics (Virtual Private Network)

### Function

- Creates a secure, encrypted connection over a public network, allowing remote access to a private network.

### Types of VPNs

1. **Remote Access VPN:**
   - Connects individual users to a private network.
   - Commonly used by remote workers.

2. **Site-to-Site VPN:**
   - Connects entire networks to each other.
   - Useful for linking branch offices.

### VPN Protocols

1. **IPSec (Internet Protocol Security):**
   - Provides secure IP communication through authentication and encryption.
   - Can operate in tunnel or transport mode.

2. **SSL/TLS (Secure Sockets Layer/Transport Layer Security):**
   - Secures data between a client and server.
   - Basis for HTTPS; used in VPNs like OpenVPN.

3. **PPTP (Point-to-Point Tunneling Protocol):**
   - Older protocol with known security vulnerabilities.
   - Largely deprecated in favor of more secure options.

4. **L2TP (Layer 2 Tunneling Protocol):**
   - Often combined with IPSec for security.
   - Provides tunneling without encryption.

## Configuring a Basic VPN with OpenVPN

### Prerequisites

- **Server:** Linux-based system.
- **Client:** Any device with OpenVPN installed.

### Steps

1. **Install OpenVPN:**
   ```bash
   sudo apt-get update
   sudo apt-get install openvpn easy-rsa
