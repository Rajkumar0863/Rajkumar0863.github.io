
# Portfolio Update Notes

## October 2026 — Recruiter-Focused Engineering Upgrade

### Objective

Improve the portfolio's value to graduate software engineering recruiters and technical hiring managers by emphasizing implementation evidence, technical decision-making and project credibility.

## Completed in This Revision

### 1. Engineering-Focused Homepage

- Clear software engineering positioning
- University of Limerick MSc details
- Expected graduation in May 2027
- Location and relocation information
- Engineering snapshot
- Resume, GitHub, LinkedIn and contact links

### 2. Project Prioritisation

Projects appear in the following order:

1. InferX
2. CacheForge
3. TradeMatch Exchange
4. TestForge
5. CRM Sales Pipeline Analysis
6. ConsultLab

Systems and backend projects are featured before supporting analytics projects.

### 3. InferX Technical Evidence

Updated using the supplied InferX source archive.

Verified implementation areas:

- C++20
- FIFO and priority scheduling
- Dynamic batching
- Thread-safe work queue
- Concurrent worker pool
- Latency percentile calculations
- Throughput measurement

Added a code excerpt from:

`src/worker_pool.cpp`

The excerpt demonstrates the worker loop consuming batches from the queue.

Added a direct link to the source file.

The repository README reports 8/8 tests passing.

Important limitations:

- Processing workloads are simulated.
- Formal benchmarking is not yet completed.
- No unverified latency or throughput numbers are displayed.

### 4. Project Case Studies

Added expandable case studies describing:

- Engineering problems
- Implementation approaches
- Data structures
- Concurrency
- Testing
- Research methods
- Known limitations

### 5. Responsive Design

Designed layouts for:

- Desktop
- Tablet
- Mobile

Includes:

- Mobile navigation
- Flexible project grids
- Scrollable source-code panel
- Responsive metrics
- Accessible navigation labels
- Reduced-motion support

### 6. Documentation

Updated:

- README.md
- UPDATE_NOTES.md

## Files to Publish

- [ ] index.html
- [ ] style.css
- [ ] script.js
- [ ] README.md
- [ ] UPDATE_NOTES.md

Retain the existing `assets/resume/` directory.

## Verification Checklist

### Functionality

- [ ] Homepage loads
- [ ] Navigation works on desktop
- [ ] Mobile menu opens and closes
- [ ] Project case studies expand
- [ ] InferX source link opens correctly
- [ ] CacheForge repository link opens correctly
- [ ] Other project repository links are verified
- [ ] Resume PDF opens
- [ ] LinkedIn opens
- [ ] Email link works

### Layout

- [ ] Desktop layout reviewed
- [ ] Tablet layout reviewed
- [ ] Mobile layout reviewed
- [ ] No horizontal overflow
- [ ] Code panel scrolls on small screens
- [ ] Project cards remain readable

### Content

- [ ] Technical claims match repositories
- [ ] Resume matches current experience
- [ ] Research status is accurate
- [ ] Graduation date is correct
- [ ] No fabricated benchmark metrics
- [ ] No broken or misleading project links

## Next Improvements

### Priority 1 — InferX Benchmarking

Implement and run a reproducible benchmark suite covering:

- Different worker counts
- Different batch sizes
- Different request volumes
- FIFO versus priority scheduling
- p50, p95 and p99 latency
- Throughput

Publish actual results with workload and hardware details.

### Priority 2 — CacheForge Evidence

Add:

- Actual GoogleTest output
- Test count
- Build instructions
- Edge-case testing details
- Relevant implementation excerpt

### Priority 3 — Repository Documentation

Improve project READMEs with:

- Architecture
- Build commands
- Test commands
- Design decisions
- Limitations
- Reproducible examples

### Priority 4 — Portfolio Maintenance

- Keep resume updated
- Check repository links
- Update completed project milestones
- Review mobile usability
- Keep technical evidence verifiable

## Quality Principle

The portfolio should demonstrate actual engineering ability, not merely claim it.

Prioritise accurate source evidence, reproducible results, working links and clear explanations over decorative metrics.

---

Last revised: October 2026
