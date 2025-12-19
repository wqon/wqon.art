const slidesContainer = document.querySelector(".pa-slides");
let slides = document.querySelectorAll(".pa-slide");
const prevBtn = document.querySelector(".pa-nav.prev");
const nextBtn = document.querySelector(".pa-nav.next");
const dots = document.querySelectorAll(".pa-dots button");
const middleCol = document.querySelector(".promoviewer");
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".pa-slide");

let index = 1;
let autoplayInterval = null;

function showSlide(i, instant = false) {
  slidesContainer.style.transition = instant ? "none" : "transform 0.5s ease";
  slidesContainer.style.transform = `translateX(-${i * 100}%)`;
  index = i;
  if (index === slides.length - 1) {
    setTimeout(() => showSlide(1, true), 500);
  }
  if (index === 0) {
    setTimeout(() => showSlide(slides.length - 2, true), 500);
  }

  dots.forEach((dot) => dot.classList.remove("active"));
  let dotIndex = index - 1;
  if (dotIndex < 0) dotIndex = slides.length - 3;
  if (dotIndex >= slides.length - 2) dotIndex = 0;
  dots[dotIndex].classList.add("active");
}

prevBtn.addEventListener("click", () => showSlide(index - 1));
nextBtn.addEventListener("click", () => showSlide(index + 1));

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.slide, 10));
  });
});

function startAutoplay() {
  stopAutoplay();
  autoplayInterval = setInterval(() => showSlide(index + 1), 6000);
}
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

middleCol.addEventListener("mouseenter", stopAutoplay);
middleCol.addEventListener("mouseleave", startAutoplay);

showSlide(index, true);
startAutoplay();
