

---

## 8. Security Basics

### File: `08_Security_Basics.md`

```markdown
# 8. Security Basics

## Overview

Network security is essential to protect data, maintain privacy, and ensure the integrity and availability of network resources. This includes implementing measures like firewalls, encryption, and defending against common attacks.

## Firewalls and Proxies

### Firewalls

**Function:**

- Act as a barrier between trusted and untrusted networks, controlling incoming and outgoing traffic based on predefined security rules.

### Types of Firewalls

1. **Packet-Filtering Firewalls:**
   - Inspect packets based on headers (source/destination IP, ports, protocol).
   - **Pros:** Simple, fast.
   - **Cons:** Limited context; can't inspect payloads.

2. **Stateful Inspection Firewalls:**
   - Track the state of active connections and make decisions based on connection context.
   - **Pros:** More secure than packet-filtering.
   - **Cons:** More resource-intensive.

3. **Proxy Firewalls:**
   - Act as intermediaries between clients and servers, filtering traffic at the application layer.
   - **Pros:** Can inspect payloads; provide anonymity.
   - **Cons:** Slower due to additional processing.

4. **Next-Generation Firewalls (NGFW):**
   - Combine traditional firewall capabilities with additional features like intrusion prevention, application awareness, and advanced threat protection.
   - **Pros:** Comprehensive security.
   - **Cons:** More complex and expensive.

### Proxies

**Function:**

- Serve as intermediaries for requests from clients seeking resources from other servers.
- **Types:**
  - **Forward Proxy:** Used by clients to access external resources.
  - **Reverse Proxy:** Used by servers to manage incoming requests.

**Use Cases:**

- **Content Filtering:** Blocking access to specific websites or content.
- **Caching:** Reducing latency by caching frequently accessed resources.
- **Anonymity:** Hiding client IP addresses from external servers.

## SSL/TLS and HTTPS

### SSL/TLS (Secure Sockets Layer/Transport Layer Security)

**Function:**

- Provides encryption, authentication, and integrity for data transmitted over networks.

### Versions

- **SSL:** Deprecated due to security vulnerabilities.
- **TLS:** Successor to SSL; current versions include TLS 1.2 and TLS 1.3.

### Components

1. **Encryption:** Ensures data confidentiality.
2. **Authentication:** Verifies the identity of parties involved.
3. **Integrity:** Detects any tampering with the data.

### HTTPS (HTTP Secure)

**Function:**

- Secures HTTP communication by layering it over SSL/TLS.

### Usage

- Protects data exchanged between web browsers and servers.
- Essential for e-commerce, online banking, and any site handling sensitive information.

### Obtaining SSL/TLS Certificates

- **Certificate Authorities (CAs):** Trusted entities that issue digital certificates.
- **Let's Encrypt:** Free, automated CA providing SSL/TLS certificates.

### Example: Enabling HTTPS with Let's Encrypt and Certbot

1. **Install Certbot:**
   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
