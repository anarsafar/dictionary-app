import "../css/response.css"
import { info, input, result, resultContainer, resultHeader } from "./domElements"

const displayResponse = (res) => {
    if (res.title) {
        info.innerHTML = `Can't find the meaning <span class="not-found">"${input.value}"</span>. 
                          Please try to search for another word
                         `
    } else {
        resultContainer.classList.add('show-result');
        resultHeader.classList.add('show-result-components');
        result.classList.add('show-result-components');
    }
}

export default displayResponse
