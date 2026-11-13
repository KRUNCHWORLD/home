// Gentle pointer parallax on desktop; the page remains fully usable without JavaScript.
const stage = document.querySelector('.transmission');
const angels = document.querySelectorAll('.angel');
if (stage && window.matchMedia('(pointer:fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  stage.addEventListener('pointermove', (event) => {
    const x = (event.clientX / window.innerWidth - .5) * 2;
    const y = (event.clientY / window.innerHeight - .5) * 2;
    angels.forEach((angel, index) => {
      const direction = index === 0 ? -1 : 1;
      angel.style.marginLeft = `${x * 9 * direction}px`;
      angel.style.marginTop = `${y * 7}px`;
    });
  });
}

// Start the transmission sound on the visitor's first tap or click.
// Browsers require a user gesture before audio playback.
let futureSoundStarted = false;
function startFutureSound() {
  if (futureSoundStarted) return;
  const sound = new Audio("assets/FUTURE.wav");
  sound.preload = "auto";
  sound.volume = 0.85;
  sound.play().then(() => {
    futureSoundStarted = true;
    window.removeEventListener("pointerdown", startFutureSound);
    window.removeEventListener("keydown", startFutureSound);
  }).catch((error) => {
    console.warn("FUTURE audio could not start yet:", error);
  });
}
window.addEventListener("pointerdown", startFutureSound);
window.addEventListener("keydown", startFutureSound);
