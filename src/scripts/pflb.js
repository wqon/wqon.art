const items = Array.from(document.querySelectorAll("figure"));
const imgs = items.map((item) => item.querySelector(".pflb-img"));

const lightbox = document.querySelector(".pflb");
const lbImg = lightbox.querySelector("img");
const lbAlt = lightbox.querySelector(".pflb-alt");

let index = 0;

function openLightbox(i) {
  index = i;
  const img = imgs[index];
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  if (lbAlt) lbAlt.textContent = img.alt || "";
  lightbox.classList.add("open");
}

function closeLightbox() {
  lightbox.classList.remove("open");
}

function next() {
  index = (index + 1) % imgs.length;
  openLightbox(index);
}

function prev() {
  index = (index - 1 + imgs.length) % imgs.length;
  openLightbox(index);
}

items.forEach((item, i) => {
  item.addEventListener("click", () => openLightbox(i));
});

lightbox.querySelector(".pflb-close").addEventListener("click", closeLightbox);
lightbox.querySelector(".pflb-right").addEventListener("click", next);
lightbox.querySelector(".pflb-left").addEventListener("click", prev);

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowRight") next();
  if (e.key === "ArrowLeft") prev();
});
