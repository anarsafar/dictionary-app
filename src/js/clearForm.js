import { clearBtn, input, result, resultContainer, resultHeader } from './domElements';

const hideResponseUI = () => {
    resultContainer.classList.remove('show-result');
    result.classList.remove('show-result-components');
    resultHeader.classList.remove('show-result-components');
}

clearBtn.addEventListener('click', () => {
    input.value = '';
    hideResponseUI();
    clearBtn.classList.remove('show-clear-btn');
    input.focus();
});

input.addEventListener('keyup', (e) => {
    const { value } = e.target;
    if (value.length === 0) {
        hideResponseUI();
        clearBtn.classList.remove('show-clear-btn');
    } else {
        clearBtn.classList.add('show-clear-btn');
    }
});