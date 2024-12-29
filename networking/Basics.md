## OSI Model (7 Layers)

The OSI model is a conceptual framework that standardizes the functions of a telecommunication or computing system into seven abstraction layers:

1. **Physical Layer**
   - **Function:** Transmits raw bitstreams over a physical medium.
   - **Examples:** Ethernet cables, fiber optics, radio frequencies.
   
2. **Data Link Layer**
   - **Function:** Provides node-to-node data transfer and handles error correction from the physical layer.
   - **Sub-layers:** 
     - **MAC (Media Access Control):** Controls how devices access the medium.
     - **LLC (Logical Link Control):** Manages frame synchronization, flow control, and error checking.
   - **Examples:** Ethernet, PPP, Switches.

3. **Network Layer**
   - **Function:** Determines the best physical path for data to reach its destination.
   - **Key Protocols:** IP (Internet Protocol), ICMP (Internet Control Message Protocol).
   - **Devices:** Routers.

4. **Transport Layer**
   - **Function:** Provides reliable data transfer services to the upper layers.
   - **Key Protocols:** TCP (Transmission Control Protocol), UDP (User Datagram Protocol).
   
5. **Session Layer**
   - **Function:** Manages sessions or connections between applications.
   - **Examples:** NetBIOS, RPC (Remote Procedure Call).

6. **Presentation Layer**
   - **Function:** Translates data between the application layer and the network.
   - **Responsibilities:** Data encryption/decryption, data compression.
   - **Examples:** SSL/TLS, JPEG, GIF.

7. **Application Layer**
   - **Function:** Provides network services directly to end-user applications.
   - **Examples:** HTTP, FTP, SMTP, DNS.

### TCP/IP Model

The TCP/IP model is a more streamlined and practical framework, primarily used in real-world networking. It consists of four layers:

1. **Link Layer (Network Interface)**
   - **Equivalent to OSI's Physical and Data Link Layers.**
   - **Responsibilities:** Handling hardware addressing and the protocols used to deliver data over the physical network.
   - **Examples:** Ethernet, Wi-Fi.

2. **Internet Layer**
   - **Equivalent to OSI's Network Layer.**
   - **Responsibilities:** Routing packets across network boundaries.
   - **Key Protocols:** IP, ICMP, ARP (Address Resolution Protocol).

3. **Transport Layer**
   - **Equivalent to OSI's Transport Layer.**
   - **Responsibilities:** Providing end-to-end communication services.
   - **Key Protocols:** TCP, UDP.

4. **Application Layer**
   - **Equivalent to OSI's Session, Presentation, and Application Layers.**
   - **Responsibilities:** High-level APIs, including resource sharing, remote file access.
   - **Examples:** HTTP, FTP, SMTP, DNS.

### Comparing OSI and TCP/IP Models

| **OSI Model**           | **TCP/IP Model**          |
|-------------------------|---------------------------|
| 7. Application          | 4. Application            |
| 6. Presentation         |                           |
| 5. Session              |                           |
| 4. Transport            | 3. Transport              |
| 3. Network              | 2. Internet               |
| 2. Data Link            | 1. Link                   |
| 1. Physical             |                           |

- **Flexibility:** The TCP/IP model is less rigid and more flexible, aligning closely with the actual implementation of network protocols.
- **Adoption:** The TCP/IP model is the foundation of the Internet, making it more widely adopted in practical scenarios.
- **Layer Consolidation:** TCP/IP consolidates several OSI layers into single layers, simplifying the model.

### Protocols at Each Layer

Understanding the protocols associated with each layer helps in comprehending how data is handled as it traverses a network.

- **Physical Layer:** Ethernet, DSL, USB.
- **Data Link Layer:** Ethernet (IEEE 802.3), Wi-Fi (IEEE 802.11), PPP.
- **Network Layer:** IP (IPv4, IPv6), ICMP, OSPF, BGP.
- **Transport Layer:** TCP, UDP.
- **Session Layer:** NetBIOS, PPTP.
- **Presentation Layer:** SSL/TLS, MIME.
- **Application Layer:** HTTP, FTP, SMTP, DNS.

### Practical Example: Data Flow Through Layers

When you access a website:

1. **Application Layer:** Your browser sends an HTTP request.
2. **Presentation Layer:** The request is formatted (e.g., encrypted via TLS).
3. **Session Layer:** Establishes a session with the web server.
4. **Transport Layer:** TCP breaks the data into segments.
5. **Network Layer:** IP addresses are added for routing.
6. **Data Link Layer:** Frames are created for physical transmission.
7. **Physical Layer:** Bits are transmitted over the network medium.

---

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

## 3. Routing & Switching

### Overview

Routing and switching are critical functions in network infrastructure, responsible for directing data traffic efficiently and effectively.

### Switching

**Switches** operate at the **Data Link Layer (Layer 2)** of the OSI model, facilitating communication within the same network.

#### Functions of a Switch

1. **MAC Address Learning:**
   - Switches learn the MAC addresses of connected devices by inspecting incoming frames.
   
2. **Frame Forwarding:**
   - Frames are forwarded only to the specific port where the destination device is connected, reducing unnecessary traffic.

3. **Loop Prevention:**
   - Protocols like **Spanning Tree Protocol (STP)** prevent network loops that can cause broadcast storms.

#### Types of Switches

- **Unmanaged Switches:**
  - Plug-and-play devices with no configuration.
  - Suitable for small networks.
  
- **Managed Switches:**
  - Offer advanced features like VLANs, QoS, and SNMP monitoring.
  - Suitable for larger, more complex networks.

#### VLANs (Virtual LANs)

- **Purpose:** Segment a physical network into multiple logical networks.
- **Benefits:** Enhances security, reduces broadcast domains, improves traffic management.
- **Configuration:** Assign ports to specific VLANs; inter-VLAN routing requires a router or Layer 3 switch.

### Routing

**Routers** operate at the **Network Layer (Layer 3)** of the OSI model, directing data packets between different networks.

#### Functions of a Router

1. **Path Selection:**
   - Determines the best path for data packets based on routing algorithms and protocols.

2. **Packet Forwarding:**
   - Forwards packets from the source to the destination network.

3. **Inter-Network Communication:**
   - Connects different network segments, enabling communication between them.

4. **Network Address Translation (NAT):**
   - Translates private IP addresses to a public IP address for Internet communication.

#### Types of Routers

- **Core Routers:**
  - High-capacity routers used within the backbone of the Internet.
  
- **Edge Routers:**
  - Connect internal networks to external networks (e.g., Internet).
  
- **Virtual Routers:**
  - Software-based routers running on virtual machines or cloud environments.

### Routing Tables

A **routing table** stores routes to particular network destinations, facilitating efficient packet forwarding.

#### Components of a Routing Table

1. **Destination Network:** The target network or IP address range.
2. **Subnet Mask:** Defines the network portion of the destination.
3. **Next Hop:** The next router to forward the packet to.
4. **Interface:** The router interface to use for forwarding.
5. **Metric:** A value that represents the cost of using the route (used for path selection).

#### Static vs. Dynamic Routing

- **Static Routing:**
  - Manually configured routes.
  - Suitable for small or simple networks.
  - **Pros:** Simple, low overhead.
  - **Cons:** Not scalable, lacks adaptability.

- **Dynamic Routing:**
  - Routes are automatically learned and updated using routing protocols.
  - Suitable for larger, complex networks.
  - **Pros:** Scalable, adaptable to network changes.
  - **Cons:** More complex, higher overhead.

### Common Routing Protocols

1. **RIP (Routing Information Protocol):**
   - **Type:** Distance-vector.
   - **Metric:** Hop count.
   - **Limitations:** Maximum of 15 hops; slow convergence.

2. **OSPF (Open Shortest Path First):**
   - **Type:** Link-state.
   - **Metric:** Cost based on bandwidth.
   - **Advantages:** Fast convergence, scalable.

3. **EIGRP (Enhanced Interior Gateway Routing Protocol):**
   - **Type:** Advanced distance-vector.
   - **Metric:** Bandwidth, delay, load, reliability.
   - **Advantages:** Fast convergence, supports VLSM/CIDR.

4. **BGP (Border Gateway Protocol):**
   - **Type:** Path-vector.
   - **Metric:** AS path, policy-based attributes.
   - **Usage:** Core routing protocol of the Internet.

### Practical Example: Configuring OSPF

**Scenario:** Configure OSPF on two routers to enable communication between them.

**Router A Configuration:**

```bash
RouterA# configure terminal
RouterA(config)# router ospf 1
RouterA(config-router)# network 192.168.1.0 0.0.0.255 area 0
RouterA(config-router)# exit
RouterA(config)# exit
RouterA# write memory

RouterB# configure terminal
RouterB(config)# router ospf 1
RouterB(config-router)# network 192.168.1.0 0.0.0.255 area 0
RouterB(config-router)# exit
RouterB(config)# exit
RouterB# write memory

``` 



