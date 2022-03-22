import submitWord from "../ajax";
import { result } from "../domElements";

const setButtonClick = () => {
    const buttons = document.querySelectorAll('.getDefinition');

    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            submitWord(e, e.target.innerHTML);
        });
    });
};

const displayCards = (getRandomDef, key, synonyms, antonyms) => {
    result.innerHTML += `
    <div class="line-through">
        <div class="meaning">
            <h3>Definition <span>(${key})</span></h3>
            <p class="definition-text">${getRandomDef.definition}</p>
        </div>
    </div>
    ${getRandomDef.example !== undefined ? `
            <div class="line-through">
                <div class="example">
                     <h3>Example</h3>
                     <p class="example-text">${getRandomDef.example}</p>
                </div>
            </div>` : ""}
     ${synonyms.length !== 0 ? `
            <div class="line-through">
                <div class="list">
                     <h3>Synonyms</h3>
                     <p class="list-container">${synonyms.map(synonym => ` <button class="getDefinition">${synonym}</button>`)}</p>
                </div>
            </div>` : ""}
    ${antonyms.length !== 0 ? `
            <div class="line-through">
                <div class="list">
                     <h3>Antonyms</h3>
                     <p class="list-container">${antonyms.map(antonym => ` <button class="getDefinition">${antonym}</button>`)}</p>
                </div>
            </div>` : ""}`;
    setButtonClick();
}

export default displayCards;