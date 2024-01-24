// Variables
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
let score = 0;
const gameOver = document.querySelector(".game-over_screen");

// Add and remove jump
const jump = () => {
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

// Pipe colision
const loop = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    game0ver();

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "assets/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

// Score

// Game Over
const game0ver = () => {
  clearInterval(loop);
  pipe.style.animation = "none";
  mario.style.animation = "none";
  mario.scr = "assets/game-over.png";
  mario.style.width = "80px";
  mario.style.marginLeft = "50px";
  gameOver.style.display = "block";
};

// Keydown event
document.addEventListener("keydown", jump);
