
# Rajkumar Vijayan — Software Engineering Portfolio

Personal engineering portfolio of **Rajkumar Vijayan**, an MSc Software Development (International Systems) student at the University of Limerick, Ireland.

**Live website:** https://rajkumar0863.github.io/

**Expected graduation:** May 2027  
**Location:** Limerick, Ireland  
**Interests:** Systems programming, backend engineering, concurrency, software testing and data engineering

## About

I build software projects that explore correctness, performance, concurrency and reliability.

My background combines software development, data science, business analytics and professional experience in machine-learning data operations.

My current technical focus includes:

- C++20 systems programming
- Data structures and algorithms
- Multithreading and synchronization
- Java and Spring Boot backend development
- Automated software testing
- Mutation-testing research

## Featured Projects

### InferX — Concurrent Inference Scheduling Simulator

**Version:** v0.8  
**Technologies:** C++20, STL, multithreading, GoogleTest

InferX is a C++20 scheduling simulator exploring concurrent task execution and simulated inference workloads.

Implemented components include:

- FIFO scheduling
- Priority scheduling
- Dynamic batching
- Thread-safe work queue
- Concurrent worker pool
- Mutexes and condition variables
- p50, p95 and p99 latency calculations
- Throughput measurement

The worker pool consumes batches from a thread-safe queue and coordinates shutdown.

**Testing:** The InferX repository README reports 8/8 automated tests passing.

**Benchmark status:** Formal benchmarking is not yet complete. The current demonstration uses simulated processing times rather than real neural-network inference.

**Repository:** https://github.com/Rajkumar0863/inferx

**Worker pool source:** https://github.com/Rajkumar0863/inferx/blob/main/src/worker_pool.cpp

### CacheForge — Thread-Safe LRU / TTL Cache

**Technologies:** C++20, CMake, STL, GoogleTest

A reusable cache library and command-line interface implementing:

- Hash map and linked-list based LRU behaviour
- Time-to-live expiration
- Synchronization for concurrent access
- Automated unit testing

**Repository:** https://github.com/Rajkumar0863/CacheForge

### TradeMatch Exchange — Order Matching Backend

**Technologies:** Java, Spring Boot, PostgreSQL, REST APIs

A backend application implementing:

- Price-time priority order matching
- Buy and sell order processing
- REST API endpoints
- PostgreSQL persistence
- CSV export

### TestForge — Mutation-Based Test Evaluation

**Technologies:** Java, Python, JUnit, PIT

Research-oriented work associated with my MSc dissertation.

The initial pilot includes:

- Apache Commons Lang 3.9
- JUnit test execution
- PIT mutation testing
- Mutation report generation

Broader multi-model research experiments remain in progress.

### Additional Projects

**CRM Sales Pipeline Analysis:** SQL, Python and Tableau analysis of approximately 8,800 opportunities.

**ConsultLab:** Process mining and workflow analysis involving approximately 1.2 million process events.

## MSc Dissertation

**Title:** An Empirical Evaluation of Large Language Models for Automated Software Test Generation Using Mutation Testing

**University:** University of Limerick  
**Supervisor:** Tabea De Wille

Research priorities:

- Reproducible experimental design
- Evaluating generated test effectiveness
- Mutation-based fault detection
- Surviving mutant analysis
- Controlled multi-model comparisons

**Status:** In progress.

## Technical Skills

| Category | Technologies |
| --- | --- |
| Languages | C++, Java, Python, SQL, C#, JavaScript |
| Computer Science | Data Structures, Algorithms, OOP |
| Concurrency | Threads, Mutexes, Condition Variables, Thread Pools |
| Backend | Spring Boot, REST APIs, PostgreSQL |
| Testing | GoogleTest, JUnit, PIT |
| Tools | Git, GitHub, CMake, Docker, Linux/WSL, Azure |

## Professional Experience

### Amazon Development Centre India

**ML Data Associate | February 2022 – January 2023**

- Reviewed and validated more than 100,000 data records.
- Supported data quality-control processes.
- Contributed to workflow improvements associated with approximately 30% higher team productivity.

### VRBB & Associates

**Business Consulting Intern | May 2024 – July 2024**

- Supported due-diligence and business analysis.
- Reviewed financial, contractual and incorporation information.
- Assisted with documentation and management reporting.

## Education

**MSc Software Development (International Systems)**  
University of Limerick, Ireland  
2025 – May 2027 (Expected)

**PGDM Business Analytics**  
Thiagarajar School of Management, India  
2023 – 2025 | First Class

**BCA Data Science**  
B.S. Abdur Rahman Crescent Institute, India  
2017 – 2020 | First Class

## Portfolio Technology

The website uses:

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

It includes responsive navigation, expandable technical case studies, a source-code excerpt, project architecture flows, research details and resume links.

## Repository Structure

```text
Rajkumar0863.github.io/
├── index.html
├── style.css
├── script.js
├── README.md
├── UPDATE_NOTES.md
└── assets/
    └── resume/
        └── Rajkumar_Vijayan_Software_Engineering_CV.pdf
```

## Running Locally

Clone the repository:

```bash
git clone https://github.com/Rajkumar0863/Rajkumar0863.github.io.git
cd Rajkumar0863.github.io
```

Open `index.html` in a browser or use VS Code Live Server.

No build process is required.

## Deployment

The portfolio is hosted using GitHub Pages.

**Live website:** https://rajkumar0863.github.io/

## Contact

**Email:** vijayanrajkumar478@gmail.com  
**GitHub:** https://github.com/Rajkumar0863  
**LinkedIn:** https://www.linkedin.com/in/rajkumar-vijayan-0135a8338/  
**Portfolio:** https://rajkumar0863.github.io/

---

© 2026 Rajkumar Vijayan
