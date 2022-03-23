import { form, info, input } from './domElements'
import "core-js/stable";
import "regenerator-runtime/runtime";

const getDefinition = async (query) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
        const data = await response.json();
        return data;
    } catch (err) {
        throw new Error(err);
    };
};

const submitWord = (e, wordFromList) => {
    let query = input.value;

    if (info.classList.contains("hide")) {
        info.classList.remove('hide');
        import("./clearForm").then(fun => {
            const hideResponseUI = fun.default;
            hideResponseUI();
        });
    };

    info.innerHTML = `Searching the meaning of <span class="bold-text">${query}</span>`;

    if (wordFromList !== undefined) {
        query = wordFromList;
    };

    getDefinition(query)
        .then(response => {
            import("./displayResponse/displayResponse").then(fun => {
                const displayResponse = fun.default;
                displayResponse(response, wordFromList);
                input.value = "";
            });
        });

    e.preventDefault();
}

form.addEventListener('submit', (e) => submitWord(e));

export default submitWord;