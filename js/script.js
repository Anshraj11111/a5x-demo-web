// Simple smooth scroll animation trigger
const animatedSections = document.querySelectorAll('.fade-in, .slide-up');

window.addEventListener('scroll', () => {
  animatedSections.forEach(section => {
    const pos = section.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if (pos < screenPos) {
      section.style.opacity = 1;
    }
  });
});
// SCROLL REVEAL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
});

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.style.background =
    window.scrollY > 50 ? "#00162f" : "#002147";
});

// HERO TEXT TYPE EFFECT
const heroText = document.querySelector(".hero h1");
if (heroText) {
  const text = heroText.innerText;
  heroText.innerText = "";
  let i = 0;

  function typeEffect() {
    if (i < text.length) {
      heroText.innerText += text.charAt(i);
      i++;
      setTimeout(typeEffect, 40);
    }
  }
  typeEffect();
}
