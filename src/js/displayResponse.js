import "../css/response.css"
import {
    audioElement, headerWord, info, input, partOfSpeech,
    phoneticListen, phoneticSound, result, resultContainer,
    resultHeader
} from "./domElements"

const showResponseUI = () => {
    resultContainer.classList.add('show-result');
    resultHeader.classList.add('show-result-components');
    result.classList.add('show-result-components');
}

const displayHeaderData = (res) => {
    partOfSpeech.innerHTML = '';

    const newResponse = res.filter(data => data.phonetics.length > 0);
    headerWord.innerHTML = newResponse[0].word;

    newResponse.forEach(data => {

        data.phonetics.forEach(ph => {
            if (Object.prototype.hasOwnProperty.call(ph, 'text')) {
                phoneticSound.innerHTML = ph.text;
            }
            if (Object.prototype.hasOwnProperty.call(ph, 'audio')) {

                audioElement.src = ph.audio;

                phoneticListen.addEventListener('click', () => {
                    audioElement.play();
                    phoneticListen.classList.add("audio-listen");
                });

                audioElement.addEventListener('play', () => {
                    setTimeout(() => {
                        phoneticListen.classList.remove("audio-listen");
                    }, 1000);
                })
            }
        });

        data.meanings.forEach(meaning => {

            const regExp = new RegExp(`\\b${meaning.partOfSpeech}\\b`)

            if (!(regExp.test(partOfSpeech.innerHTML))) {
                partOfSpeech.innerHTML += `${meaning.partOfSpeech}, `;
            }
        });
    });
    partOfSpeech.innerHTML = partOfSpeech.innerHTML.slice(0, -2);
}

const displayBodyData = (response) => {
    result.innerHTML = '';
    const newMeaning = {};
    response.forEach(test => console.log(test));

    response.forEach(data => {
        data.meanings.forEach(meaning => {
            if (Object.prototype.hasOwnProperty.call(newMeaning, meaning.partOfSpeech)) {
                newMeaning[meaning.partOfSpeech].push(meaning);
            } else {
                newMeaning[meaning.partOfSpeech] = [];
                newMeaning[meaning.partOfSpeech].push(meaning);
            }
        });
    });

    console.log(newMeaning);

    Object.entries(newMeaning).forEach(([key, value]) => {

        if (value.length > 1) {
            const tempValue = [];

            value.forEach(val => {
                let ifHasExample = false;

                val.definitions.forEach(def => {
                    if (Object.prototype.hasOwnProperty.call(def, 'example')) {
                        ifHasExample = !ifHasExample;
                    };
                });

                if (ifHasExample) {
                    tempValue.push(val);
                };
            });

            newMeaning[key] = [...tempValue];
        };
    });

    console.log(newMeaning);

    // const definitionWithExamples = [];
    // const definitionWithoutExamples = [];

    // meaning.definitions.forEach(def => {
    //     if (Object.prototype.hasOwnProperty.call(def, 'example')) {
    //         definitionWithExamples.push(def);
    //     } else {
    //         definitionWithoutExamples.push(def);
    //     };
    // });

    // if (definitionWithExamples.length !== 0) {
    //     const getRandomDefIndex = Math.floor(Math.random() * definitionWithExamples.length);
    //     const getRandomDef = definitionWithExamples[getRandomDefIndex];

    //     console.log(definitionWithExamples, getRandomDef);
    //     result.innerHTML += `
    //     <div class="line-through">
    //         <div class="meaning">
    //             <h3>Definition <span>(${meaning.partOfSpeech})</span></h3>
    //             <p class="definition-text">${getRandomDef.definition}</p>
    //         </div>
    //     </div>
    //     <div class="line-through">
    //         <div class="example">
    //             <h3>Example</h3>
    //             <p class="example-text">${getRandomDef.example}</p>
    //         </div>
    //     </div> `
    // } else {
    //     const getRandomDefIndex = Math.floor(Math.random() * definitionWithoutExamples.length);
    //     const getRandomDef = definitionWithoutExamples[getRandomDefIndex];

    //     result.innerHTML += `
    //     <div class="line-through">
    //         <div class="meaning">
    //             <h3>Definition <span>(${meaning.partOfSpeech})</span></h3>
    //             <p class="definition-text">${getRandomDef.definition}</p>
    //         </div>
    //     </div>`
    // }
};

const displayResponse = (res) => {
    if (res.title) {
        info.innerHTML =
            `Can't find the meaning <span class="bold-text">"${input.value}"</span>. 
         Please try to search for another word`
    } else {
        displayHeaderData(res);
        displayBodyData(res);
        info.classList.add('hide');
        showResponseUI();
    }
}

export default displayResponse
