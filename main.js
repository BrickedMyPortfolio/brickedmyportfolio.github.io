// main.js - Core interaction logic for brickedmyportfolio.com

// =============================
// CrackModule
// =============================
const CrackModule = (() => {
  const brickBtn = document.getElementById("brick");
  let overlay = null;
  let audio = new Audio("media/glass-crack.mp3");

  const createOverlay = () => {
    overlay = document.createElement("div");
    overlay.className = "crack-overlay";
    overlay.innerHTML = '<img src="media/screen-crack.png" alt="crack" />';
    document.body.appendChild(overlay);
  };

  const triggerCrack = () => {
    if (!overlay) createOverlay();
    overlay.classList.add("visible");
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
      overlay.classList.remove("visible");
    }, 1500);
  };

  const setup = () => {
    if (brickBtn) brickBtn.addEventListener("click", triggerCrack);
  };

  return { setup };
})();


// =============================
// CarouselModule
// =============================
const CarouselModule = (() => {
  let current = 0;
  let slides = [];

  const showSlide = (index) => {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
  };

  const next = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  const prev = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };

  const setup = () => {
    slides = Array.from(document.querySelectorAll(".carousel-slide"));
    if (slides.length === 0) return;
    document.querySelector(".carousel-next")?.addEventListener("click", next);
    document.querySelector(".carousel-prev")?.addEventListener("click", prev);
    showSlide(current);
  };

  return { setup };
})();


// =============================
// TooltipModule
// =============================
const TooltipModule = (() => {
  const setup = () => {
    const tips = document.querySelectorAll("[data-tooltip]");
    tips.forEach((el) => {
      const tooltip = document.createElement("span");
      tooltip.className = "tooltip";
      tooltip.innerText = el.dataset.tooltip;
      el.addEventListener("mouseenter", () => {
        el.appendChild(tooltip);
      });
      el.addEventListener("mouseleave", () => {
        el.removeChild(tooltip);
      });
    });
  };

  return { setup };
})();


// =============================
// Init All Modules on Load
// =============================
document.addEventListener("DOMContentLoaded", () => {
  CrackModule.setup();
  CarouselModule.setup();
  TooltipModule.setup();
});
