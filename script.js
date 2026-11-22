const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const art = document.querySelector("#scene-art");
const visual = document.querySelector(".hero-visual");

if (art && visual && !reduceMotion && !matchMedia("(pointer: coarse)").matches) {
  visual.addEventListener("pointermove", event => {
    const rect = visual.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    art.style.transform = `perspective(900px) rotateY(${x * 13}deg) rotateX(${-y * 10}deg) scale(1.025)`;
  });
  visual.addEventListener("pointerleave", () => {
    art.style.transform = "";
  });
}

const roles = ["intelligent experiences", "AI & ML solutions", "web applications", "useful software"];
const roleNode = document.querySelector("#typed-role");
let roleIndex = 0, charIndex = 0, deleting = false;
function typeRole() {
  if (reduceMotion) { roleNode.textContent = roles[0]; return; }
  const current = roles[roleIndex];
  charIndex += deleting ? -1 : 1;
  roleNode.textContent = current.slice(0, charIndex);
  let delay = deleting ? 35 : 72;
  if (!deleting && charIndex === current.length) { deleting = true; delay = 1350; }
  else if (deleting && charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 300; }
  setTimeout(typeRole, delay);
}
typeRole();

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open"); menuButton.setAttribute("aria-expanded", "false");
}));

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  document.querySelector(".filter.active")?.classList.remove("active");
  button.classList.add("active");
  const filter = button.dataset.filter;
  document.querySelectorAll(".project-card").forEach(card => {
    card.hidden = filter !== "all" && card.dataset.category !== filter;
  });
}));

const glow = document.querySelector(".pointer-glow");
if (glow && !matchMedia("(pointer: coarse)").matches) {
  window.addEventListener("pointermove", e => {
    glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`;
  }, { passive: true });
}
document.querySelector("#year").textContent = new Date().getFullYear();
