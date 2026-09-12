const envelope = document.getElementById("envelope");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const hearts = document.querySelector(".hearts");

openBtn.addEventListener("click", () => {
  envelope.classList.add("open");
  openBtn.classList.add("active");
  closeBtn.classList.remove("active");
  createHearts();
});

closeBtn.addEventListener("click", () => {
  envelope.classList.remove("open");
  closeBtn.classList.add("active");
  openBtn.classList.remove("active");
});

function createHearts() {
  for (let i = 0; i < 14; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = 12 + Math.random() * 18 + "px";
    heart.style.animationDuration = 3 + Math.random() * 3 + "s";
    heart.style.animationDelay = Math.random() * .8 + "s";

    hearts.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
  }
}