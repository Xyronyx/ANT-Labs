/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#4cc9f0";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}
animateParticles();

/* AI TYPING */
const aiMessage =
  "ANT Labs uses Artificial Intelligence to build smarter software and next-generation Android applications.";

let i = 0;
const speed = 40;
const aiText = document.getElementById("ai-text");

function typeAI() {
  if (i < aiMessage.length) {
    aiText.innerHTML += aiMessage.charAt(i);
    i++;
    setTimeout(typeAI, speed);
  }
}
typeAI();

/* SCROLL REVEAL */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
/* NAVBAR SCROLL EFFECT */
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

/* MOBILE MENU */
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* BUTTON SCROLL */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll("section").forEach(sec => {
  observer.observe(sec);
});
window.addEventListener("scroll", () => {
  document.body.style.backgroundPositionY = window.scrollY * 0.3 + "px";
});

  
