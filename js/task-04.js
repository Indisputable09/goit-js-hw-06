const decrementBtn = document.querySelector('[data-action = "decrement"]');
const incrementBtn = document.querySelector('[data-action = "increment"]');
const valueEl = document.querySelector('#value');

let counterValue = 0;

const onIncrementBtnClick = event => {
    counterValue += 1;
    valueEl.textContent = counterValue;
}

const onDecrementBtnClick = event => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', onIncrementBtnClick);
decrementBtn.addEventListener('click', onDecrementBtnClick);
