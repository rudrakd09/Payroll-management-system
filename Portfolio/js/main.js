// Mobile nav
hamburger.onclick = () => navMenu.classList.toggle("active");

// Theme toggle
themeToggle.onclick = () => {
  document.body.classList.toggle("light");
  themeToggle.textContent =
    document.body.classList.contains("light") ? "☀️" : "🌙";
};

// Counters
document.querySelectorAll(".counter").forEach(counter => {
  let target = +counter.dataset.target;
  let count = 0;

  const update = () => {
    count++;
    counter.innerText = count;
    if (count < target) requestAnimationFrame(update);
  };
  update();
});

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// 3D tilt effect
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const rx = ((y / r.height) - 0.5) * 10;
    const ry = ((x / r.width) - 0.5) * -10;
    card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

// Contact form
contactForm.addEventListener("submit", e => {
  e.preventDefault();
  formMsg.textContent =
    name.value && email.value && message.value
      ? "Message sent successfully!"
      : "All fields required!";
});
