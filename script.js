// ===== Typing animation for hero roles =====
const roles = [
  "Flutter Developer",
  "Android Kotlin Developer",
  "AI Powered Mobile Engineer"
];
let roleIndex = 0;
let charIndex = 0;
const typingEl = document.getElementById("typing");

function typeWrite() {
  if (charIndex < roles[roleIndex].length) {
    typingEl.innerHTML += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeWrite, 90);
  } else {
    setTimeout(typeErase, 1500);
  }
}

function typeErase() {
  if (charIndex > 0) {
    typingEl.innerHTML = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeErase, 45);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeWrite, 400);
  }
}

window.addEventListener("load", typeWrite);

// ===== Mobile nav toggle =====
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

if (burger) {
  burger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

// ===== Active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navAnchors.forEach(anchor => {
    anchor.classList.remove("active");
    if (anchor.getAttribute("href") === "#" + current) {
      anchor.classList.add("active");
    }
  });
});
