"use strict";
// Wenn Mobile verschwindet Nav menü
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

  // Animation Counter
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
//Einfliegen von Resume
document.addEventListener("DOMContentLoaded", function () {
  const resumeContainer = document.querySelector(".resume-container");

  if (resumeContainer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          resumeContainer.classList.add("visible");
          observer.disconnect(); // nur einmal animieren
        }
      });
    }, { threshold: 0.2 });

    observer.observe(resumeContainer);
  }
});

// Fortschrittsbalken animation
document.addEventListener("DOMContentLoaded", function () {
  const skillElements = document.querySelectorAll(".skill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.3 });

  skillElements.forEach((el) => observer.observe(el));
});

// Nav verschwindet nach Klick (Mobile)
document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".sidebar .menu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
    });
  });
});

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");
}






