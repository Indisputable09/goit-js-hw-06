const colorEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');

bodyEl.style.backgroundColor = btnEl.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  colorEl.textContent = randomColor;
  bodyEl.style.backgroundColor = randomColor;
}