// faq
document.addEventListener("DOMContentLoaded", function () {
  const itemsfaq = document.querySelectorAll(".faq-item");

  itemsfaq.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      itemsfaq.forEach((el) => {
        el.classList.remove("active");
        const icon = el.querySelector(".icon i");
        icon.classList.remove("fa-minus");
        icon.classList.add("fa-plus");
      });

      // Toggle current
      if (!isActive) {
        item.classList.add("active");
        const icon = item.querySelector(".icon i");
        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
      }
    });
  });
});
