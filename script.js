
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --bg: #08111f;
  --bg-deep: #060c16;
  --surface: #101d2e;
  --surface-light: #17263a;
  --white: #f3f7fd;
  --muted: #a0afc2;
  --muted-dark: #687a90;
  --accent: #5ee0bd;
  --accent-blue: #76aaff;
  --border: rgba(255,255,255,.11);
  --light-bg: #f5f7fb;
  --light-text: #172337;
  --light-muted: #56657a;
  --radius: 18px;
  --max-width: 1180px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 90px;
}

body {
  font-family: 'DM Sans', Arial, sans-serif;
  background: var(--bg);
  color: var(--white);
  line-height: 1.7;
  overflow-x: hidden;
}

h1, h2, h3, h4 {
  font-family: 'Space Grotesk', Arial, sans-serif;
  line-height: 1.2;
  letter-spacing: -.035em;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

a:focus-visible,
button:focus-visible,
summary:focus-visible {
  outline: 3px solid var(--accent);
  outline-offset: 4px;
}

::selection {
  background: var(--accent);
  color: var(--bg);
}

.container {
  width: min(90%, var(--max-width));
  margin-inline: auto;
}

.section {
  padding: 110px 0;
  background: #fff;
  color: var(--light-text);
}

.section-dark {
  background: var(--bg);
  color: var(--white);
}

.section-muted {
  background: var(--light-bg);
}

.section-heading {
  max-width: 790px;
  margin-bottom: 48px;
}

.section-kicker,
.eyebrow,
.small-label {
  color: #087e70;
  font-size: .76rem;
  font-weight: 800;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.section-dark .section-kicker,
.contact-section .section-kicker {
  color: var(--accent);
}

.section-heading h2 {
  font-size: clamp(2rem, 4.2vw, 3.5rem);
  margin: 14px 0 18px;
}

.section-heading > p:last-child {
  color: var(--light-muted);
  font-size: 1.05rem;
  max-width: 690px;
}

.section-dark .section-heading > p:last-child {
  color: var(--muted);
}

/* NAVIGATION */

.site-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(8,17,31,.94);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(16px);
}

.nav {
  height: 78px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -.06em;
}

.brand span {
  color: var(--accent);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links a {
  font-size: .86rem;
  font-weight: 600;
  color: #c1cede;
  transition: color .2s;
}

.nav-links a:hover {
  color: var(--accent);
}

.nav-links .nav-contact {
  padding: 10px 17px;
  border: 1px solid var(--accent);
  color: var(--accent);
  border-radius: 8px;
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 0;
  color: white;
  font-size: 1.6rem;
  cursor: pointer;
}

/* HERO */

.hero {
  position: relative;
  padding: 105px 0 38px;
  background:
    radial-gradient(ellipse at 85% 15%,
      rgba(50,110,145,.2), transparent 45%),
    linear-gradient(145deg, #0a1628, #07101d 75%);
}

.hero-layout {
  display: grid;
  grid-template-columns: 1.35fr .8fr;
  gap: 75px;
  align-items: center;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 15px;
  border: 1px solid rgba(94,224,189,.3);
  border-radius: 50px;
  background: rgba(94,224,189,.06);
  color: #c7f7e8;
  font-size: .82rem;
  margin-bottom: 30px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: var(--accent);
  border-radius: 50%;
}

.eyebrow {
  color: var(--accent);
  margin-bottom: 18px;
}

.hero h1 {
  font-size: clamp(3.2rem, 5.8vw, 5.8rem);
  margin-bottom: 24px;
}

.hero h1 span {
  display: block;
  color: var(--accent);
}

.hero h2 {
  font-size: clamp(1.45rem, 2.3vw, 2.1rem);
  max-width: 640px;
  font-weight: 500;
  color: #e0e9f4;
  margin-bottom: 24px;
}

.hero h2 em {
  color: var(--accent-blue);
  font-style: normal;
}

.hero-description {
  color: var(--muted);
  font-size: 1.04rem;
  max-width: 640px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 34px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 13px 23px;
  font-weight: 700;
  font-size: .91rem;
  border-radius: 9px;
  transition: transform .2s, background .2s;
}

.btn:hover {
  transform: translateY(-3px);
}

.btn-primary {
  background: var(--accent);
  color: var(--bg);
}

.btn-primary:hover {
  background: #8bf2d5;
}

.btn-outline {
  border: 1px solid #60738b;
  color: white;
}

.btn-outline:hover {
  background: var(--surface-light);
}

.hero-socials {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  margin-top: 30px;
}

.hero-socials a {
  font-size: .87rem;
  color: #a9bdd4;
  font-weight: 600;
}

.hero-socials a:hover {
  color: var(--accent);
}

.hero-panel {
  padding: 30px;
  border: 1px solid rgba(122,166,201,.23);
  background: linear-gradient(
    155deg, #14253a, #0b1727
  );
  border-radius: var(--radius);
  box-shadow: 0 25px 65px rgba(0,0,0,.23);
}

.panel-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.panel-label {
  font-size: .75rem;
  letter-spacing: .12em;
  font-weight: 800;
  color: var(--accent);
}

.panel-indicator {
  color: var(--accent);
}

.panel-item {
  padding: 21px 0;
  border-bottom: 1px solid var(--border);
}

.panel-item > span {
  display: block;
  color: var(--muted-dark);
  font-size: .72rem;
  letter-spacing: .08em;
  margin-bottom: 7px;
}

.panel-item strong {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1.5rem;
}

.panel-item p {
  color: var(--muted);
  font-size: .84rem;
  margin-top: 5px;
}

.panel-footer {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 21px;
  font-size: .78rem;
  color: var(--muted);
}

.hero-bottom {
  display: flex;
  justify-content: space-between;
  color: #73869b;
  font-size: .73rem;
  font-weight: 700;
  letter-spacing: .13em;
  margin-top: 75px;
}

/* ENGINEERING EVIDENCE */

.evidence-section {
  background: #0d1b2d;
  border-block: 1px solid var(--border);
}

.evidence-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.evidence-item {
  padding: 34px 24px;
  border-right: 1px solid var(--border);
}

.evidence-item:first-child {
  padding-left: 0;
}

.evidence-item:last-child {
  border-right: 0;
}

.evidence-item strong {
  display: block;
  font-family: 'Space Grotesk', sans-serif;
  font-size: clamp(1.2rem, 2vw, 1.65rem);
  color: var(--accent);
  margin-bottom: 5px;
}

.evidence-item span {
  font-size: .84rem;
  color: var(--muted);
}

/* ABOUT */

.about-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
}

.about-lead h3 {
  font-size: clamp(1.8rem, 3vw, 2.6rem);
  max-width: 460px;
}

.about-lead h3 span {
  color: #078c7a;
}

.about-copy p {
  color: var(--light-muted);
  margin-bottom: 18px;
  font-size: 1rem;
}

/* PROJECTS */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 25px;
}

.project-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 32px;
  background: #101e31;
  border: 1px solid #26364a;
  border-radius: var(--radius);
  transition: transform .2s, border-color .2s;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: #477c91;
}

.project-card.featured {
  background: linear-gradient(160deg, #14263b, #0d1b2e);
  border-color: #31576a;
}

.project-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  color: #9db2c8;
  font-size: .72rem;
  font-weight: 800;
  letter-spacing: .1em;
  margin-bottom: 28px;
}

.project-badge {
  font-size: .65rem;
  background: rgba(94,224,189,.12);
  color: var(--accent);
  padding: 6px 9px;
  border-radius: 5px;
}

.project-badge.muted {
  background: rgba(118,170,255,.1);
  color: #a5c8ff;
}

.project-card h3 {
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin-bottom: 6px;
}

.project-subtitle {
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 17px;
  font-size: .93rem;
}

.project-description {
  color: #b5c2d1;
  font-size: .95rem;
  margin-bottom: 22px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 26px;
}

.tag-list span {
  padding: 6px 10px;
  background: #1c3045;
  border: 1px solid #2b435a;
  border-radius: 5px;
  font-size: .72rem;
  color: #c9d7e6;
}

.architecture {
  border: 1px solid #31465a;
  border-radius: 10px;
  background: #0b1726;
  padding: 19px;
  margin-bottom: 23px;
}

.architecture-title {
  display: flex;
  justify-content: space-between;
  font-size: .7rem;
  color: #89a6bb;
  letter-spacing: .09em;
  font-weight: 800;
  margin-bottom: 15px;
}

.architecture-steps {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.architecture-steps span {
  background: #20374b;
  border: 1px solid #35546a;
  padding: 8px 10px;
  border-radius: 5px;
  color: #e0edf6;
  font-size: .72rem;
}

.architecture-steps b {
  color: var(--accent);
  font-size: 1rem;
}

.case-study {
  border-top: 1px solid var(--border);
  margin-top: 4px;
  margin-bottom: 23px;
}

.case-study summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 0;
  color: #e6f1fb;
  font-weight: 700;
  font-size: .9rem;
}

.case-study summary::-webkit-details-marker {
  display: none;
}

.case-study summary span {
  font-size: 1.3rem;
  color: var(--accent);
  transition: transform .2s;
}

.case-study[open] summary span {
  transform: rotate(45deg);
}

.case-study-content {
  padding: 0 0 20px;
}

.case-study-content h4 {
  color: var(--accent);
  font-size: .91rem;
  margin: 17px 0 7px;
}

.case-study-content p {
  color: #b5c2d1;
  font-size: .9rem;
}

.project-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 19px;
  border-top: 1px solid var(--border);
  color: var(--accent);
  font-weight: 800;
  font-size: .88rem;
}

.project-link:hover {
  color: #a1f5dd;
}

.secondary-project .project-description {
  flex: 1;
}

/* RESEARCH */

.research-layout {
  display: grid;
  grid-template-columns: 1.3fr .8fr;
  gap: 70px;
}

.research-main {
  padding: 35px;
  background: #f5f8fb;
  border: 1px solid #e0e7ef;
  border-radius: var(--radius);
}

.research-main h3 {
  font-size: clamp(1.5rem, 2.4vw, 2.2rem);
  margin: 18px 0 24px;
}

.research-main p {
  color: var(--light-muted);
  margin-bottom: 17px;
}

.research-aside {
  padding: 25px 0;
}

.research-aside h4 {
  font-size: 1.2rem;
  margin-bottom: 23px;
}

.research-point {
  display: flex;
  gap: 20px;
  padding: 16px 0;
  border-bottom: 1px solid #dce4ed;
}

.research-point span {
  color: #078c7a;
  font-weight: 800;
}

.research-point p {
  font-weight: 600;
  color: var(--light-text);
}

/* SKILLS */

.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.skill-card {
  padding: 28px;
  background: white;
  border: 1px solid #e1e7ef;
  border-radius: 13px;
}

.skill-icon {
  width: 43px;
  height: 43px;
  display: grid;
  place-items: center;
  background: #e4f8f2;
  color: #087d70;
  font-weight: 800;
  border-radius: 9px;
  margin-bottom: 24px;
}

.skill-card h3 {
  font-size: 1.16rem;
  margin-bottom: 12px;
}

.skill-card p {
  color: var(--light-muted);
  font-size: .94rem;
}

/* EXPERIENCE */

.timeline {
  border-left: 2px solid #dce7ef;
  margin-left: 12px;
}

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  padding: 0 0 50px 32px;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 5px;
  width: 14px;
  height: 14px;
  background: #0b9c88;
  border: 3px solid white;
  border-radius: 50%;
}

.timeline-date {
  color: #087d70;
  font-size: .8rem;
  font-weight: 800;
  letter-spacing: .07em;
}

.timeline-content h3 {
  font-size: 1.5rem;
}

.timeline-company {
  color: #087d70;
  font-weight: 700;
  margin: 8px 0 17px;
}

.timeline-content ul {
  padding-left: 20px;
  color: var(--light-muted);
}

.timeline-content li {
  margin-bottom: 9px;
}

/* EDUCATION */

.education-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 22px;
}

.education-card {
  padding: 29px;
  background: white;
  border: 1px solid #e0e7ee;
  border-radius: 13px;
}

.education-year {
  font-size: .75rem;
  color: #087d70;
  font-weight: 800;
  letter-spacing: .08em;
}

.education-card h3 {
  margin: 19px 0 12px;
  font-size: 1.3rem;
}

.education-specialism {
  font-weight: 600;
}

.education-institution {
  font-weight: 700;
  margin: 13px 0;
  color: #394d61;
}

.education-card > p:last-of-type {
  color: var(--light-muted);
  font-size: .93rem;
  margin-bottom: 23px;
}

.education-status {
  display: inline-block;
  font-size: .71rem;
  font-weight: 800;
  color: #087d70;
  background: #e7f7f1;
  padding: 6px 10px;
  border-radius: 5px;
}

/* DEVELOPMENT */

.development-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.development-card {
  background: #f6f9fc;
  border: 1px solid #e1e8f0;
  padding: 33px;
  border-radius: 14px;
}

.development-card h3 {
  font-size: 1.45rem;
  margin: 14px 0;
}

.development-card > p:last-child {
  color: var(--light-muted);
}

.cert-list {
  padding-left: 20px;
  color: var(--light-muted);
}

.cert-list li {
  margin-bottom: 8px;
}

/* CONTACT */

.contact-section {
  background: linear-gradient(135deg, #10233a, #08111f);
  color: white;
  padding: 110px 0;
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 90px;
  align-items: center;
}

.contact-layout h2 {
  font-size: clamp(2.3rem, 4vw, 4rem);
  margin: 16px 0 22px;
}

.contact-layout p {
  color: var(--muted);
  max-width: 580px;
}

.contact-location {
  margin-top: 25px;
  font-size: .9rem;
}

.contact-actions {
  display: flex;
  flex-direction: column;
}

.contact-actions a {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 0;
  border-bottom: 1px solid var(--border);
  font-weight: 700;
  color: #e3edf8;
}

.contact-actions a:hover {
  color: var(--accent);
}

.contact-actions .contact-email {
  color: var(--accent);
  font-size: 1.3rem;
}

/* FOOTER */

.footer {
  background: var(--bg-deep);
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 26px 0;
  color: #899caf;
  font-size: .8rem;
}

.footer a:hover {
  color: var(--accent);
}

/* RESPONSIVE */

@media (max-width: 1100px) {
  .hero-layout {
    gap: 35px;
  }

  .nav-links {
    gap: 16px;
  }

  .nav-links a {
    font-size: .8rem;
  }
}

@media (max-width: 900px) {
  .hero-layout,
  .about-layout,
  .research-layout,
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .hero {
    padding-top: 75px;
  }

  .hero-panel {
    max-width: 650px;
  }

  .skills-grid,
  .education-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .evidence-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .evidence-item:nth-child(2) {
    border-right: 0;
  }

  .evidence-item:nth-child(-n+2) {
    border-bottom: 1px solid var(--border);
  }

  .timeline-item {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media (max-width: 720px) {
  .container {
    width: min(91%, var(--max-width));
  }

  .section {
    padding: 75px 0;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 78px;
    left: 0;
    right: 0;
    background: #0d1b2d;
    border-bottom: 1px solid var(--border);
    padding: 22px 5%;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }

  .nav-links.active {
    display: flex;
  }

  .nav-links a {
    display: block;
    padding: 13px 5px;
    font-size: .95rem;
  }

  .nav-links .nav-contact {
    margin-top: 10px;
    text-align: center;
  }

  .hero h1 {
    font-size: clamp(2.8rem, 11vw, 4.3rem);
  }

  .hero-actions {
    flex-direction: column;
  }

  .hero-actions .btn {
    width: 100%;
  }

  .projects-grid,
  .skills-grid,
  .education-grid,
  .development-grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    padding: 24px;
  }

  .architecture-steps {
    gap: 7px;
  }

  .architecture-steps span {
    font-size: .69rem;
  }

  .contact-section {
    padding: 80px 0;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 420px) {
  .evidence-item {
    padding: 22px 12px;
  }

  .evidence-item strong {
    font-size: 1.08rem;
  }

  .evidence-item span {
    font-size: .74rem;
  }

  .hero-panel {
    padding: 22px;
  }

  .research-main,
  .development-card {
    padding: 24px;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
  }
}
