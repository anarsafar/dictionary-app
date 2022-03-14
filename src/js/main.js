import "../css/main.css";

// add focus state
const input = document.querySelector('input');
const magnifyingIcon = document.querySelector('.fa-magnifying-glass');
const formContainer = document.querySelector('form');

input.addEventListener('focusin', () => {
    formContainer.classList.add('set-focus-border');
    magnifyingIcon.classList.add('set-focus-mag');
});

input.addEventListener('focusout', () => {
    formContainer.classList.remove('set-focus-border');
    magnifyingIcon.classList.remove('set-focus-mag');
});

window.onload = () => input.focus();