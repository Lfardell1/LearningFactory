

---

## 10. Performance & Monitoring

### File: `10_Performance_and_Monitoring.md`

```markdown
# 10. Performance & Monitoring

## Overview

Monitoring network performance is crucial for ensuring optimal operation, identifying bottlenecks, and maintaining service quality. Key metrics include bandwidth, latency, and jitter, while various tools aid in measuring and analyzing these parameters.

## Key Performance Metrics

1. **Bandwidth:**
   - **Definition:** The maximum rate of data transfer across a network path.
   - **Units:** Bits per second (bps), Kilobits per second (Kbps), Megabits per second (Mbps), Gigabits per second (Gbps).

2. **Latency:**
   - **Definition:** The time it takes for data to travel from source to destination.
   - **Units:** Milliseconds (ms).
   - **Components:** Propagation delay, transmission delay, processing delay, queuing delay.

3. **Jitter:**
   - **Definition:** Variability in packet arrival times.
   - **Impact:** Affects real-time applications like VoIP and streaming.

4. **Packet Loss:**
   - **Definition:** Percentage of packets that fail to reach their destination.
   - **Impact:** Degrades application performance and reliability.

## Tools for Performance Measurement

### Ping

**Function:**

- Measures latency by sending ICMP echo requests to a target host and waiting for echo replies.

**Usage:**

```bash
ping example.com

---

