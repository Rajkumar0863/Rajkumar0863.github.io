
"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Automatic footer year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    function setMenuState(isOpen) {
      navLinks.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
      );
      menuToggle.textContent = isOpen ? "✕" : "☰";
    }

    menuToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.contains("active");
      setMenuState(!isOpen);
    });

    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setMenuState(false);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        navLinks.classList.contains("active") &&
        !navLinks.contains(event.target) &&
        !menuToggle.contains(event.target)
      ) {
        setMenuState(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) {
        setMenuState(false);
      }
    });
  }
});
