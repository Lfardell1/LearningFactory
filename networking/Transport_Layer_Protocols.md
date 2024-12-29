# 4. Transport Layer Protocols

## Overview

The Transport Layer (Layer 4) is responsible for end-to-end communication between applications. The two primary protocols at this layer are **TCP (Transmission Control Protocol)** and **UDP (User Datagram Protocol)**, each serving different purposes based on the requirements of the communication.

## TCP vs. UDP

### Transmission Control Protocol (TCP)

- **Type:** Connection-oriented.
- **Reliability:** Ensures reliable data transfer with error checking, acknowledgment, and retransmission.
- **Flow Control:** Manages data flow to prevent congestion using windowing mechanisms.
- **Ordering:** Guarantees that data is received in the order it was sent.
- **Use Cases:** Web browsing (HTTP/HTTPS), email (SMTP), file transfers (FTP).

**Key Features:**

1. **Three-Way Handshake:**
   - **SYN:** Client initiates connection.
   - **SYN-ACK:** Server acknowledges and responds.
   - **ACK:** Client acknowledges the server's response.

2. **Error Detection and Correction:**
   - Checksums ensure data integrity.
   - Retransmits lost or corrupted packets.

3. **Flow Control:**
   - **Sliding Window Protocol:** Adjusts the rate of data transmission based on receiver's capacity.

4. **Congestion Control:**
   - Algorithms like **TCP Reno**, **TCP Cubic** manage data flow based on network congestion.

### User Datagram Protocol (UDP)

- **Type:** Connectionless.
- **Reliability:** No guarantee of delivery, ordering, or error checking.
- **Flow Control:** None; data is sent as quickly as possible.
- **Ordering:** No ordering guarantees.
- **Use Cases:** Streaming media (video/audio), online gaming, DNS queries, VoIP.

**Key Features:**

1. **No Handshake:**
   - Data is sent without establishing a connection.

2. **Minimal Overhead:**
   - Smaller header size (8 bytes) compared to TCP (20 bytes).
   - Faster data transmission with less latency.

3. **No Congestion Control:**
   - Potential for packet loss in congested networks.

4. **Stateless Protocol:**
   - Each packet is independent; no session state is maintained.

## Ports and Sockets

### Ports

- **Definition:** Logical endpoints for communication, identified by port numbers.
- **Range:** 0 to 65535.
  - **Well-Known Ports:** 0-1023 (e.g., HTTP: 80, HTTPS: 443, SMTP: 25).
  - **Registered Ports:** 1024-49151 (assigned to user processes).
  - **Dynamic/Private Ports:** 49152-65535 (ephemeral ports for temporary use).

### Sockets

- **Definition:** Combination of an IP address and a port number, serving as a communication endpoint.
- **Types:**
  - **TCP Sockets:** Provide reliable, ordered communication.
  - **UDP Sockets:** Provide fast, connectionless communication.

**Socket Example:**

- **TCP Socket:** `192.168.1.10:8080`
- **UDP Socket:** `192.168.1.10:5000`

## Socket Programming

### TCP Socket Workflow

1. **Server Side:**
   - **Create Socket:** Initialize a TCP socket.
   - **Bind:** Assign an IP address and port number.
   - **Listen:** Wait for incoming connections.
   - **Accept:** Establish a connection with a client.
   - **Send/Receive:** Exchange data.
   - **Close:** Terminate the connection.

2. **Client Side:**
   - **Create Socket:** Initialize a TCP socket.
   - **Connect:** Establish a connection to the server.
   - **Send/Receive:** Exchange data.
   - **Close:** Terminate the connection.

**Python TCP Server Example:**

```python
import socket

HOST = '127.0.0.1'
PORT = 65432

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    s.bind((HOST, PORT))
    s.listen()
    print(f"Server listening on {HOST}:{PORT}")
    conn, addr = s.accept()
    with conn:
        print(f"Connected by {addr}")
        while True:
            data = conn.recv(1024)
            if not data:
                break
            conn.sendall(data)
```python

import Sockets

HOST = '127.0.0.1'
PORT = 65433

with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
    s.bind((HOST, PORT))
    print(f"UDP server listening on {HOST}:{PORT}")
    while True:
        data, addr = s.recvfrom(1024)
        print(f"Received {data} from {addr}")
        s.sendto(data, addr)
```
