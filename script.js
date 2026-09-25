// =====================================================
// CURRENT YEAR
// =====================================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =====================================================
// MOBILE NAVIGATION
// =====================================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen.toString()
        );

    });


    // Close menu after selecting a navigation link

    const links = navLinks.querySelectorAll("a");


    links.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// =====================================================
// CLOSE MOBILE MENU AFTER RESIZING TO DESKTOP
// =====================================================

window.addEventListener("resize", () => {

    if (
        window.innerWidth > 800 &&
        navLinks &&
        menuToggle
    ) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});


// =====================================================
// ESC KEY CLOSES MOBILE MENU
// =====================================================

document.addEventListener("keydown", (event) => {

    if (
        event.key === "Escape" &&
        navLinks &&
        menuToggle
    ) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});