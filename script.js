/* ============================================================
   Respect reduced-motion preference
============================================================ */
const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

/* ============================================================
   Mobile nav toggle
============================================================ */
const navToggle = document.getElementById("navToggle");
const navLinksEl = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

function closeNav() {
  navToggle.classList.remove("open");
  navLinksEl.classList.remove("open");
  navOverlay.classList.remove("show");
  navToggle.setAttribute("aria-expanded", "false");
}

function toggleNav() {
  const isOpen = navLinksEl.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  navOverlay.classList.toggle("show", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
}

if (navToggle) {
  navToggle.addEventListener("click", toggleNav);
  navOverlay.addEventListener("click", closeNav);
  navLinksEl.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });
}

/* ============================================================
   Scroll-triggered fade-in reveal
============================================================ */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        fadeObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade").forEach((el) => fadeObserver.observe(el));

/* ============================================================
   Scroll-spy: highlight active nav link
============================================================ */
const sections = document.querySelectorAll("section[id]");
const navLinkMap = new Map();

document.querySelectorAll(".nav-link").forEach((link) => {
  const id = link.getAttribute("href").replace("#", "");
  navLinkMap.set(id, link);
});

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const link = navLinkMap.get(entry.target.id);
      if (!link) return;
      if (entry.isIntersecting) {
        document
          .querySelectorAll(".nav-link.active")
          .forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => spyObserver.observe(section));

/* ============================================================
   Typewriter — rotating role text
============================================================ */
const roles = [
  "Flutter Developer",
  "Android Engineer",
  "AI-Driven Mobile Architect",
];

const typingEl = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;

function typeRole() {
  if (!typingEl) return;
  if (charIndex < roles[roleIndex].length) {
    typingEl.textContent += roles[roleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeRole, 70);
  } else {
    setTimeout(eraseRole, 1800);
  }
}

function eraseRole() {
  if (charIndex > 0) {
    typingEl.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseRole, 35);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeRole, 400);
  }
}

if (typingEl) {
  if (prefersReducedMotion) {
    typingEl.textContent = roles[0];
  } else {
    window.addEventListener("load", () => setTimeout(typeRole, 600));
  }
}

/* ============================================================
   Material-style ripple effect
============================================================ */
document.querySelectorAll(".ripple").forEach((el) => {
  el.addEventListener("click", function (e) {
    if (prefersReducedMotion) return;

    const rect = this.getBoundingClientRect();
    const circle = document.createElement("span");
    const size = Math.max(rect.width, rect.height) * 1.4;

    circle.className = "ripple-circle";
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${e.clientX - rect.left - size / 2}px`;
    circle.style.top = `${e.clientY - rect.top - size / 2}px`;

    this.appendChild(circle);
    circle.addEventListener("animationend", () => circle.remove());
  });
});

/* ============================================================
   Hero phone — cycling bottom-nav active indicator
============================================================ */
const phoneNavItems = document.querySelectorAll(".phone-nav-item");

if (phoneNavItems.length && !prefersReducedMotion) {
  let activeIndex = 0;
  setInterval(() => {
    phoneNavItems[activeIndex].classList.remove("active");
    activeIndex = (activeIndex + 1) % phoneNavItems.length;
    phoneNavItems[activeIndex].classList.add("active");
  }, 2600);
}
