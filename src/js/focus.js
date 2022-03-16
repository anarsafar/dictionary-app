import { input, form, magnifyingIcon } from './domElements'

// add focus state
input.addEventListener('focusin', () => {
    form.classList.add('set-focus-border');
    magnifyingIcon.classList.add('set-focus-mag');
});

input.addEventListener('focusout', () => {
    form.classList.remove('set-focus-border');
    magnifyingIcon.classList.remove('set-focus-mag');
});

window.onload = () => input.focus();