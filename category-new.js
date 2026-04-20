// faq
// document.addEventListener("DOMContentLoaded", function () {
//   const itemsfaq = document.querySelectorAll(".faq-item");

//   itemsfaq.forEach((item) => {
//     item.querySelector(".faq-question").addEventListener("click", () => {
//       const isActive = item.classList.contains("active");

//       // Close all
//       itemsfaq.forEach((el) => {
//         el.classList.remove("active");
//         const img = el.querySelector(".icon-img");
//         img.src = "img/plus-icon.svg";
//       });

//       // Toggle current
//       if (!isActive) {
//         item.classList.add("active");
//         const img = item.querySelector(".icon-img");
//         img.src = "img/minus-icon.svg"; // 👉 your local minus image
//       }
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const itemsfaq = document.querySelectorAll(".faq-item");

//   itemsfaq.forEach((item) => {
//     item.querySelector(".faq-question").addEventListener("click", () => {
//       const isActive = item.classList.contains("active");

//       // Close all
//       itemsfaq.forEach((el) => {
//         el.classList.remove("active");

//         const img = el.querySelector(".icon-img");
//         img.src = img.dataset.plus; // ✅ dynamic
//       });

//       // Open current
//       if (!isActive) {
//         item.classList.add("active");

//         const img = item.querySelector(".icon-img");
//         img.src = img.dataset.minus; // ✅ dynamic
//       }
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const itemsfaq = document.querySelectorAll(".faq-item");

  itemsfaq.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Close all
      itemsfaq.forEach((el) => {
        el.classList.remove("active");

        const img = el.querySelector(".icon-img");
        img.src = img.dataset.plus; // ✅ dynamic
      });

      // Open current
      if (!isActive) {
        item.classList.add("active");

        const img = item.querySelector(".icon-img");
        img.src = img.dataset.minus; // ✅ dynamic
      }
    });
  });
});
