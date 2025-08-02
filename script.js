// script.js

// === Contact Form Validation ===
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      const name = form.querySelector("input[name='name']").value.trim();
      const email = form.querySelector("input[name='email']").value.trim();
      const message = form.querySelector("textarea[name='message']").value.trim();

      if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        e.preventDefault();
      }
    });
  }
});

// === Game Frame Fullscreen Toggle ===
document.querySelectorAll(".game-frame").forEach((frame) => {
  frame.addEventListener("dblclick", () => {
    if (frame.requestFullscreen) {
      frame.requestFullscreen();
    } else if (frame.webkitRequestFullscreen) {
      frame.webkitRequestFullscreen();
    } else if (frame.msRequestFullscreen) {
      frame.msRequestFullscreen();
    }
  });
});

// === Sprite Preview Hover (Shop or Portfolio) ===
document.querySelectorAll(".product-card, .item").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = "0 0 15px #00ffcc99";
  });
  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "0 0 10px #00ffcc33";
  });
});

// === Navigation Highlight on Scroll (Optional) ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 100;
    const height = section.offsetHeight;
    if (top >= offset && top < offset + height) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});
