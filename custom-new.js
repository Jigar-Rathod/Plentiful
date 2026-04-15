// images-changes
const items = document.querySelectorAll(".image-innar");
let start = 0;
const visibleCount = 6;

function updateSlider() {
  items.forEach((item) => item.classList.remove("active"));
  for (let i = 0; i < visibleCount; i++) {
    const index = (start + i) % items.length;
    items[index].classList.add("active");
  }
  start = (start + 1) % items.length;
}
updateSlider();
setInterval(updateSlider, 2000);

// four-boxes-img
document.querySelectorAll(".four-boxes").forEach((section) => {
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
