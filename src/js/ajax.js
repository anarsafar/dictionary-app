import { form, input } from './domElements'
import "core-js/stable";
import "regenerator-runtime/runtime";

const getDefinition = async (query) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
        const data = await response.json();
        return data
    } catch (err) {
        throw new Error(err)
    }
}

form.addEventListener('submit', (e) => {
    const query = input.value;
    getDefinition(query)
        .then(response => {
            import("./displayResponse").then(fun => {
                const displayResponse = fun.default;
                displayResponse(response)
            })
        })
    e.preventDefault();
});