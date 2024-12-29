

---

## 9. Socket Programming

### File: `09_Socket_Programming.md`

```markdown
# 9. Socket Programming

## Overview

Socket programming enables the creation of networked applications by providing a way for processes to communicate over a network. It involves using sockets as endpoints for sending and receiving data.

## Client-Server Architecture

**Definition:**

- **Client:** Initiates requests for services.
- **Server:** Listens for and responds to client requests.

**Workflow:**

1. **Server Setup:**
   - Create a socket.
   - Bind to an IP address and port.
   - Listen for incoming connections.
   - Accept connections and handle client requests.

2. **Client Setup:**
   - Create a socket.
   - Connect to the server's IP address and port.
   - Send requests and receive responses.

## TCP and UDP Socket Creation

### TCP Socket

**Steps:**

1. **Create Socket:**
   ```python
   import socket
   s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
