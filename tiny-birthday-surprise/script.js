const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");
const openThisButton = document.getElementById("openThisButton");
const secretGiftReveal = document.getElementById("secretGiftReveal");
const secretGiftBox = document.getElementById("secretGiftBox");
const effectsLayer = document.getElementById("effectsLayer");
const birthdayMusic = document.getElementById("birthdayMusic");

let firstSurpriseOpened = false;
let secondSurpriseOpened = false;

surpriseButton.addEventListener("click", function () {
  if (firstSurpriseOpened) return;

  firstSurpriseOpened = true;

  surpriseMessage.hidden = false;
  surpriseButton.setAttribute("aria-expanded", "true");
  surpriseButton.querySelector("span:first-child").textContent =
    "Your surprise is open!";
  surpriseButton.querySelector(".button-heart").textContent = "♥";
  surpriseButton.disabled = true;

  createFloatingHearts();
  createFallingPetals();

  if (birthdayMusic) {
    birthdayMusic.volume = 0.3;
    birthdayMusic.play().catch(function () {
      console.log("Music could not start automatically.");
    });
  }

  setTimeout(function () {
    surpriseMessage.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 200);
});

openThisButton.addEventListener("click", function () {
  if (secondSurpriseOpened) return;

  secondSurpriseOpened = true;

  secretGiftReveal.hidden = false;
  secretGiftBox.classList.add("secret-gift-open");
  openThisButton.setAttribute("aria-expanded", "true");
  openThisButton.textContent = "Your little gift is open! ♡";
  openThisButton.disabled = true;

  createFloatingHearts();
  createFallingPetals();
  createGiftSparkles();

  setTimeout(function () {
    secretGiftReveal.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }, 250);
});

function createFloatingHearts() {
  const hearts = ["💗", "💕", "💖", "♡", "💞"];

  for (let i = 0; i < 24; i++) {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = 18 + Math.random() * 20 + "px";
    heart.style.animationDelay = Math.random() * 0.25 + "s";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";

    effectsLayer.appendChild(heart);

    setTimeout(function () {
      heart.remove();
    }, 6000);
  }
}

function createFallingPetals() {
  const petals = ["🌸", "🌷", "🌼", "✿", "❀"];

  for (let i = 0; i < 18; i++) {
    const petal = document.createElement("span");

    petal.className = "falling-petal";
    petal.textContent = petals[Math.floor(Math.random() * petals.length)];
    petal.style.left = Math.random() * 100 + "%";
    petal.style.fontSize = 15 + Math.random() * 17 + "px";
    petal.style.animationDelay = Math.random() * 1.2 + "s";
    petal.style.animationDuration = 4 + Math.random() * 2 + "s";

    effectsLayer.appendChild(petal);

    setTimeout(function () {
      petal.remove();
    }, 7000);
  }
}

function createGiftSparkles() {
  const sparkles = ["✨", "✦", "💖", "♡", "⭐"];

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("span");

    sparkle.className = "gift-sparkle";
    sparkle.textContent =
      sparkles[Math.floor(Math.random() * sparkles.length)];

    sparkle.style.left = Math.random() * 100 + "%";
    sparkle.style.top = 25 + Math.random() * 60 + "%";
    sparkle.style.animationDelay = Math.random() * 0.8 + "s";

    effectsLayer.appendChild(sparkle);

    setTimeout(function () {
      sparkle.remove();
    }, 3000);
  }
}