const formEl = document.querySelector('.login-form');
const btnEl = document.querySelector('button');
const inputEmailEl = document.querySelector('input[name = email]');
const inputPasswordEl = document.querySelector('input[name = password]');

formEl.addEventListener('submit', onfromElSubmit);

function onfromElSubmit(event) {
    event.preventDefault();
    const elements = { login: inputEmailEl.value, password: inputPasswordEl.value };
    console.log(elements);

    if (inputEmailEl.value === "" || inputPasswordEl.value === "") {
        window.alert('All inputs must be filled');
    }
    else {
        const formData = new FormData(event.currentTarget);
        formData.forEach((value, name) => {
        
        console.log(`${name}: `, value);
        event.currentTarget.reset();
        });
    }
};