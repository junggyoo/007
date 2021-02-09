const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');
const target = document.querySelector('.target');
const coordinate = document.querySelector('.coordinate');

addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  window.addEventListener("mousemove", (e) => {
    const x = e.clientX;
    const y = e.clientY;

    lineX.style.transform = `translateY(${y}px)`;
    lineY.style.transform = `translateX(${x}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    coordinate.style.transform = `translate(${x}px, ${y}px)`;
    coordinate.innerHTML = `${x}px, ${y}px`;
  });
});