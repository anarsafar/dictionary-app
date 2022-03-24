/* eslint-disable import/no-cycle */
import "../../css/response.css";
import { info, input, result, resultContainer, resultHeader } from "../domElements";
import displayHeaderData from "./displayHeaderData";
import displayBodyData from "./displayBodyData/displayBodyData";

const showResponseUI = () => {
    resultContainer.classList.add('show-result');
    resultHeader.classList.add('show-result-components');
    result.classList.add('show-result-components');
};

const displayResponse = (res,wordFromList) => {
    if (res.title) {
        info.innerHTML =
            `Can't find the meaning 
            <span class="bold-text">
                "${input.value.length !== 0 ? input.value : wordFromList}"
            </span>. 
             Please try to search for another word`;
    } else {
        displayHeaderData(res);
        displayBodyData(res);
        info.classList.add('hide');
        showResponseUI();
    };
};

export default displayResponse;
