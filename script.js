
document.addEventListener("DOMContentLoaded", function () {
    // Update the copyright year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav nav");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            const isOpen = navLinks.classList.toggle("open");

            menuToggle.setAttribute("aria-expanded", String(isOpen));
        });

        // Close menu after clicking a link
        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (
                !menuToggle.contains(event.target) &&
                !navLinks.contains(event.target)
            ) {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });

        // Close menu with Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navLinks.classList.remove("open");
                menuToggle.setAttribute("aria-expanded", "false");
            }
        });
    }
});
