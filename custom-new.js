// images-changes
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".image-innar");
  if (items.length === 0) return; // ✅ prevent error
  let start = 0;
  const visibleCount = Math.min(6, items.length); // ✅ safe
  function updateSlider() {
    items.forEach((item) => item.classList.remove("active"));
    for (let i = 0; i < visibleCount; i++) {
      const index = (start + i) % items.length;
      if (items[index]) {
        items[index].classList.add("active");
      }
    }
    start = (start + 1) % items.length;
  }
  updateSlider();
  setInterval(updateSlider, 2000);
});

// four-boxes-img
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".four-boxes-hpn").forEach((section) => {
    const boxImages = section.querySelectorAll(
      ".four-boxes-left .box-img, .four-boxes-left .vertical-img",
    );
    const boxes = section.querySelectorAll(".four-boxes-right-box");
    boxes.forEach((box, index) => {
      box.addEventListener("mouseenter", () => {
        boxImages.forEach((img) => img.classList.remove("active"));
        boxes.forEach((b) => b.classList.remove("active"));
        boxImages[index].classList.add("active");
        box.classList.add("active");
      });
    });
  });
});

//video-section start
document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector(".lazy-video");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const source = video.querySelector("source");

          // lazy load
          if (!source.src) {
            source.src = source.dataset.src;
            video.load();
          }

          video.play();

          obs.unobserve(video); // run only once
        }
      });
    },
    {
      threshold: 0.5,
    },
  );
  observer.observe(video);
});
