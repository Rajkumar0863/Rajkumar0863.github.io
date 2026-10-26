
# Portfolio Update Notes

## Project

**Rajkumar Vijayan — Software Engineering Portfolio**

Repository:
https://github.com/Rajkumar0863/Rajkumar0863.github.io

Live website:
https://rajkumar0863.github.io/

## Update Overview

This revision is designed to reposition the portfolio as an engineering-focused website for graduate and early-career software engineering opportunities.

The objective is to make technical work easier for recruiters and hiring managers to evaluate.

Rather than presenting only project titles and technology badges, the redesigned website explains:

- What problem each project addresses
- Which technologies and data structures were used
- How the implementation is organised
- How correctness and performance are evaluated
- What engineering concepts were explored

## 1. Landing Page

The hero section has been redesigned to communicate:

- MSc Software Development at the University of Limerick
- Expected graduation in May 2027
- Interest in systems and backend engineering
- Experience with C++ concurrency projects
- Software testing and performance measurement
- Location in Limerick and openness to Dublin relocation

Primary navigation actions:

- Explore Projects
- View Resume
- GitHub
- LinkedIn
- Email

## 2. Engineering Evidence

A technical snapshot section highlights:

- C++20 systems programming
- LRU and TTL caching
- p50, p95 and p99 latency measurement
- JUnit and PIT mutation testing

These are intended as pointers to implementation evidence, not unsupported performance claims.

## 3. Project Section

Projects are organised to prioritise software engineering relevance.

### Project 1: InferX

Focus:

- Concurrent scheduling
- Dynamic batching
- Priority queues
- Worker threads
- Mutexes and condition variables
- Throughput and latency measurements

Includes an expandable engineering case study.

### Project 2: CacheForge

Focus:

- C++20 cache implementation
- Hash maps and linked lists
- LRU eviction
- TTL expiration
- Thread safety
- GoogleTest

Confirmed repository:
https://github.com/Rajkumar0863/CacheForge

### Project 3: TradeMatch Exchange

Focus:

- Java backend engineering
- Spring Boot
- REST APIs
- Price-time priority matching
- PostgreSQL persistence
- CSV export

### Project 4: TestForge

Focus:

- MSc dissertation research
- JUnit
- PIT mutation testing
- Open-source Java code
- Test effectiveness evaluation

The research is ongoing.

### Additional Projects

- CRM Sales Pipeline Analysis
- ConsultLab

These demonstrate supporting experience in analytics and process improvement.

## 4. MSc Research Section

Added a dedicated dissertation section with:

- Full dissertation title
- Research context
- Mutation testing methodology
- Initial Apache Commons Lang 3.9 pilot
- Research priorities
- Current work-in-progress status

## 5. Technical Skills

Skills are grouped into:

1. Programming Languages
2. Computer Science Fundamentals
3. Systems and Concurrency
4. Backend Development
5. Testing and Quality
6. Developer Tools

Skills should be kept consistent with actual implementation experience.

## 6. Professional Experience

Professional experience remains visible without displacing engineering projects.

Included:

- Amazon Development Centre India
- VRBB & Associates

Descriptions emphasise accurate responsibilities and transferable skills.

## 7. Education and Development

Included:

- University of Limerick MSc
- PGDM Business Analytics
- BCA Data Science
- Entrepreneurship Cell leadership
- Relevant professional certifications

## 8. Website Implementation

Files to update:

```text
index.html
style.css
script.js
README.md
UPDATE_NOTES.md
```

Existing resume assets should remain in place.

The website uses:

- Semantic HTML
- Responsive CSS
- Vanilla JavaScript
- Native HTML details elements for case studies

No JavaScript framework or build pipeline is required.

## 9. Deployment Checklist

Before publishing:

- [ ] Replace index.html
- [ ] Replace style.css
- [ ] Replace script.js
- [ ] Replace README.md
- [ ] Replace UPDATE_NOTES.md
- [ ] Confirm resume PDF exists at the referenced path
- [ ] Verify all project repository links
- [ ] Verify LinkedIn and GitHub links
- [ ] Preview desktop layout
- [ ] Preview mobile layout
- [ ] Test navigation menu
- [ ] Test expandable case studies
- [ ] Check spelling and technical claims
- [ ] Commit changes to main
- [ ] Confirm GitHub Pages deployment succeeds
- [ ] Open the live website and verify updates

## 10. Important Link Verification

The CacheForge repository URL is confirmed:

https://github.com/Rajkumar0863/CacheForge

Other project repository URLs in the HTML should be checked before publishing.

Do not replace missing project repositories with the GitHub profile or an unrelated README.

If a repository is private or not yet published, use an accurate project-status label rather than a misleading link.

## 11. Planned Improvements

### Priority 1 — Project Evidence

Add actual project evidence:

- InferX benchmark results
- CacheForge test output
- Architecture diagrams
- Selected code excerpts
- Reproducible build instructions

### Priority 2 — Repository Documentation

Improve individual project READMEs with:

- Problem statement
- Architecture
- Design decisions
- Setup and build commands
- Testing instructions
- Known limitations
- Future improvements

### Priority 3 — Technical Demonstrations

Where practical, add:

- Command-line demonstrations
- Screenshots of test results
- Example API requests and responses
- Performance measurement tables

### Priority 4 — Portfolio Maintenance

- Keep the resume current
- Update completed projects
- Correct broken links
- Remove outdated skills or claims
- Check mobile usability after major changes

## 12. Recruiter-Focused Quality Standard

The website should allow a recruiter to understand within approximately 30 seconds:

1. Who Rajkumar Vijayan is
2. Which engineering roles he is targeting
3. What relevant software he has built
4. Which technical concepts he has implemented
5. Where to inspect code and testing evidence
6. How to contact him

The portfolio should prioritise accuracy, clarity and verifiable engineering evidence over exaggerated claims or visual effects.

---

Last documentation revision: October 2026
