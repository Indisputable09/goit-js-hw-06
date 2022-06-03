const inputEl = document.querySelector('[type=number]');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const mainDivEl = document.querySelector('#boxes');


createBtn.addEventListener('click', onCreateClick);
destroyBtn.addEventListener('click', onDestroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = 30 + i * 10 + 'px';
    divEl.style.height = 30 + i * 10 + 'px';
    divEl.style.marginTop = 5 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    mainDivEl.append(divEl);
  }
};

function onCreateClick(element) {
  mainDivEl.innerHTML = "";
  createBoxes(inputEl.value);
};

function onDestroyClick(element) {
  mainDivEl.innerHTML = "";
  inputEl.value = 0;
};