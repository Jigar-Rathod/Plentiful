document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".mega-dropdown");

  dropdowns.forEach(function (dropdown) {
    dropdown.addEventListener("mouseenter", function () {
      if (window.innerWidth > 991) {
        dropdown.classList.add("open");
      }
    });

    dropdown.addEventListener("mouseleave", function () {
      if (window.innerWidth > 991) {
        dropdown.classList.remove("open");
      }
    });

    const link = dropdown.querySelector(".dropdown-toggle");
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 991) {
        e.preventDefault();
        e.stopPropagation(); // prevent bubbling issue

        const isOpen = dropdown.classList.contains("open");

        // close all
        dropdowns.forEach((d) => d.classList.remove("open"));

        // open only if it was closed
        if (!isOpen) {
          dropdown.classList.add("open");
        }
      }
    });
  });
});

// icon changes
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".Hamburger-menu a").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".menu-section-header").classList.toggle("active");
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");

      // BODY CLASS
      if (document.querySelector(".menu-section-header.active")) {
        document.body.classList.add("menu-open");
      } else {
        document.body.classList.remove("menu-open");
      }
    });
  });
});
