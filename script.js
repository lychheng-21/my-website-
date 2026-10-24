
document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.getElementById("currentYear");
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  // Update copyright year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Stop if navigation elements do not exist
  if (!menuToggle || !navigation) {
    return;
  }

  // Close the mobile navigation
  function closeMenu() {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  }

  // Open or close the mobile navigation
  function toggleMenu() {
    const isOpen = navigation.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  }

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMenu();
  });

  // Close after a navigation link is clicked
  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  // Close when clicking outside the menu
  document.addEventListener("click", function (event) {
    if (
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  // Close when pressing Escape
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  // Reset the menu when switching back to desktop
  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
