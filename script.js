/* =========================================================
   ISM Unique Design — script.js
   JavaScript simplu, fără dependințe externe.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- An curent în footer ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Header: fundal la scroll ---------- */
  var header = document.getElementById("siteHeader");
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
    toggleBackToTop();
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Meniu mobil ---------- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      var isOpen = document.body.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "Închide meniul" : "Deschide meniul");
    });
    navLinks.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        document.body.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Reveal la scroll (IntersectionObserver) ---------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Buton "Înapoi sus" ---------- */
  var toTop = document.getElementById("toTop");
  function toggleBackToTop() {
    if (!toTop) return;
    if (window.scrollY > 700) {
      toTop.classList.add("is-visible");
    } else {
      toTop.classList.remove("is-visible");
    }
  }
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Formular de contact ---------- */
  /*
    Acesta este un site static, fără server/backend.
    Validăm formularul în JavaScript și afișăm un mesaj de confirmare.
    Pentru trimiterea reală a emailurilor, conectează formularul la un
    serviciu compatibil cu site-uri statice (ex: Formspree, Getform,
    Netlify Forms) — vezi instrucțiunile din README.md.
  */
  var form = document.getElementById("contactForm");
  var status = document.getElementById("formStatus");

  function setStatus(message, type) {
    if (!status) return;
    status.textContent = message;
    status.className = "form-status" + (type ? " " + type : "");
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var name = form.querySelector("#name");
      var email = form.querySelector("#email");
      var message = form.querySelector("#message");
      var consent = form.querySelector("#consent");

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        setStatus("Te rugăm să completezi toate câmpurile obligatorii.", "err");
        return;
      }
      if (!emailPattern.test(email.value.trim())) {
        setStatus("Te rugăm să introduci o adresă de email validă.", "err");
        return;
      }
      if (!consent.checked) {
        setStatus("Te rugăm să confirmi acordul de utilizare a datelor.", "err");
        return;
      }

      setStatus("Mulțumim! Mesajul tău a fost înregistrat — te vom contacta în curând.", "ok");
      form.reset();
    });
  }
})();
