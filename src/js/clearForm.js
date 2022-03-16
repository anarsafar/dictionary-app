import { cancelBtn, input } from './domElements';

cancelBtn.addEventListener('click', () => {
    input.value = '';
    cancelBtn.classList.remove('show-cancel-btn');
    input.focus();
});

input.addEventListener('keyup', (e) => {
    const { value } = e.target;
    if (value.length === 0) {
        cancelBtn.classList.remove('show-cancel-btn');
    } else {
        cancelBtn.classList.add('show-cancel-btn');
    }
})