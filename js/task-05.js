const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener("input", onInputElInput);

function onInputElInput(event) {
    event.currentTarget.value !== "" ? outputEl.textContent = event.currentTarget.value : outputEl.textContent = "Anonymous";
}