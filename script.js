
document.addEventListener("DOMContentLoaded", function () {
  // Update the copyright year
  const currentYear = document.getElementById("currentYear");

  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // Mobile navigation
  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (!menuToggle || !navigation) {
    return;
  }

  function closeMenu() {
    navigation.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  }

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

  navigation.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", function (event) {
    if (
      !navigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
