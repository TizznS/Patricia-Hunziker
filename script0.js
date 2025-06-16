"use strict";

function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // Typed.js Initialisierung
  const typedElement = document.querySelector(".typed");
  if (typedElement) {
    new Typed(".typed", {
      strings: typedElement.getAttribute("data-typed-items").split(","),
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
  }

  // ✅ Animation Counter
  const counters = document.querySelectorAll('.counter');
  let hasCounted = false;

  function animateCounters() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let current = 0;
      const increment = Math.ceil(target / 100);

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          counter.innerText = current.toLocaleString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCounter();
    });
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasCounted) {
        hasCounted = true;
        animateCounters();
      }
    });
  }, { threshold: 0.3 });

  const targetSection = document.querySelector('.counters-section');
  if (targetSection) observer.observe(targetSection);
});
