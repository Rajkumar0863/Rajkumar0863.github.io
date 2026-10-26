
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const toggle = document.getElementById("menuToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  function setMenuOpen(open) {
    links.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu"
    );
    toggle.textContent = open ? "✕" : "☰";
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(!links.classList.contains("active"));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (
      links.classList.contains("active") &&
      !links.contains(event.target) &&
      !toggle.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 720) setMenuOpen(false);
  });
});
