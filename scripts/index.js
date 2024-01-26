// Variables
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const gameOverDisplay = document.querySelector(".game-over_screen");
// const scoreDisplay = document.querySelector(".score");
// let score = 0;

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
    // increaseScore();
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;
    gameOver();

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "assets/game-over.png";
    mario.style.width = "80px";
    mario.style.marginLeft = "50px";

    clearInterval(loop);
  }
}, 10);

// Game Over
const gameOver = () => {
  clearInterval(loop);
  pipe.style.animation = "none";
  mario.style.animation = "none";
  mario.scr = "assets/game-over.png";
  mario.style.width = "80px";
  mario.style.marginLeft = "50px";
  gameOverDisplay.style.display = "block";
};

// Score
// const increaseScore = () => {
//   score += 10;
//   scoreDisplay.textContent = `Score: ${score}`;
// };

// Keydown event
document.addEventListener("keydown", jump);
