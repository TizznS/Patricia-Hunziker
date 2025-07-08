"use strict";

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
  const counters = document.querySelectorAll(".counter");
  let hasCounted = false;

  function animateCounters() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
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

  const counterSection = document.querySelector(".counters-section");
  if (counterSection) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasCounted) {
            hasCounted = true;
            animateCounters();
            counterObserver.unobserve(counterSection);
          }
        });
      },
      { threshold: 0.3 }
    );

    counterObserver.observe(counterSection);
  }

  // Einfliegen von Resume
  const resumeContainer = document.querySelector(".resume-container");
  if (resumeContainer) {
    const resumeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            resumeContainer.classList.add("visible");
            resumeObserver.disconnect(); // nur einmal animieren
          }
        });
      },
      { threshold: 0.2 }
    );

    resumeObserver.observe(resumeContainer);
  }

  // Fortschrittsbalken Animation
  const skillElements = document.querySelectorAll(".skill");
  if (skillElements.length > 0) {
    const skillObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.3 }
    );

    skillElements.forEach((el) => skillObserver.observe(el));
  }

  // Nav verschwindet nach Klick (Mobile)
  const menuLinks = document.querySelectorAll(".sidebar .menu a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.getElementById("sidebar").classList.remove("active");
      document.body.classList.remove("sidebar-open");
    });
  });
});

// Wenn Mobile: Sidebar Ein-/Ausblenden
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  document.body.classList.toggle("sidebar-open");
}

// Render Server erlaubt in der Freeversion nur 15minuten bevor Server wieder in Sleepmodus geht. Hier ein kleiner Trick, damit nicht Renderseite kommt beim Formular übermitteln #Usability
// Render Server ist innert 5 Sekunden wieder wach, mehrmals durch div. User getestet inntert 5 Sekunden schafft man nicht das Contact + Captcha auszufüllen nach Seiten laden.
const pingURL = "https://kontaktformular.onrender.com/ping";

// Direkt beim Laden
window.addEventListener("DOMContentLoaded", () => {
  pingServer(); // direkt beim Start
  setInterval(pingServer, 10 * 60 * 1000); // alle 10 Minuten
});

// Falls Endbenutzer Seite offen haben und länger als 15minuten darauf verweilen. Sollte 99,9% der Benutzerfälle abdecken. 
function pingServer() {
  fetch(pingURL)
    .then(() => console.log("Server gepingt – sollte wach bleiben."))
    .catch(() => console.warn("Ping fehlgeschlagen – Server evtl. im Schlaf."));
}
