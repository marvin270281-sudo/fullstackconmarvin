// Variables
let playerScore = 0;
let computerScore = 0;

// Función para generar una carta aleatoria
function getRandomCard() {
  return Math.floor(Math.random() * 10) + 1;
}

// Evento del botón
document.getElementById("draw-button").addEventListener("click", () => {
  const playerCard = getRandomCard();
  const computerCard = getRandomCard();

  document.getElementById("player-card").textContent = playerCard;
  document.getElementById("computer-card").textContent = computerCard;

  let resultText = "";

  if (playerCard > computerCard) {
    playerScore++;
    resultText = "¡Ganaste la ronda! 🎉";
  } else if (computerCard > playerCard) {
    computerScore++;
    resultText = "La computadora ganó la ronda. 😞";
  } else {
    resultText = "Empate. 🤝";
  }

  document.getElementById("result").textContent = resultText;
  document.getElementById("score").textContent = `Jugador: ${playerScore} | Computadora: ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    document.getElementById("draw-button").disabled = true;
    document.getElementById("result").textContent +=
      playerScore === 5 ? " ¡Has ganado el juego! 🏆" : " La computadora ha ganado el juego. 💻";
  }
});
function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}

const audio = document.getElementById("musicaFondo");
const volumeSlider = document.getElementById("volumeSlider");
const volumeBtn = document.getElementById("volumeBtn");

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

// Alternar mute al hacer clic en el botón
volumeBtn.addEventListener("click", () => {
  audio.muted = !audio.muted;
  volumeBtn.textContent = audio.muted ? "🔇" : "🔊";
});

musicaFundo.volume = 0.03; // volume bem baixinho

document.addEventListener("DOMContentLoaded", () => {
  const musicaFundo = document.getElementById("musicaFundo");
  const controleVolume = document.getElementById("controleVolume");
  const botaoVolume = document.getElementById("botaoVolume");

  if (musicaFundo && controleVolume && botaoVolume) {
    botaoVolume.addEventListener("click", () => {
      controleVolume.style.display = "block";
    });

    controleVolume.addEventListener("input", () => {
      musicaFundo.volume = parseFloat(controleVolume.value);
    });
  }
});
