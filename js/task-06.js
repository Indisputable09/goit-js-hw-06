const inputEl = document.querySelector('#validation-input');
const inputElLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onInputElBlur);

function onInputElBlur(event) {
    event.currentTarget.value.length == inputElLength ? inputEl.classList.add('valid') +
        inputEl.classList.remove('invalid') : inputEl.classList.add('invalid') + inputEl.classList.remove('valid');
};
