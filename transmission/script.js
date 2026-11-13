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
