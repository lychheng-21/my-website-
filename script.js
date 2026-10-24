
document.addEventListener("DOMContentLoaded", function () {

    // 1. Update copyright year automatically
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // 2. Mobile menu
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        // Open and close menu
        menuToggle.addEventListener("click", function (event) {
            event.stopPropagation();

            const isOpen = navigation.classList.toggle("open");

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Close navigation" : "Open navigation"
            );
        });

        // Close menu after clicking a link
        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            });
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (
                !navigation.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            }
        });

        // Close menu when pressing Escape
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape") {
                navigation.classList.remove("open");

                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.setAttribute("aria-label", "Open navigation");
            }
        });
    }

});
