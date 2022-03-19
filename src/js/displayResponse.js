import "../css/response.css"
import { audioElement, headerWord, info, input, partOfSpeech, phoneticListen, phoneticSound, result, resultContainer, resultHeader } from "./domElements"

const showResponseUI = () => {
    resultContainer.classList.add('show-result');
    resultHeader.classList.add('show-result-components');
    result.classList.add('show-result-components');
}

const displayHeaderData = (res) => {
    partOfSpeech.innerHTML = '';
    res.forEach(test => console.log(test));

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

const displayResponse = (res) => {
    if (res.title) {
        info.innerHTML = `Can't find the meaning <span class="bold-text">"${input.value}"</span>. 
                          Please try to search for another word
                         `
    } else {
        info.classList.add('hide');
        showResponseUI();
        displayHeaderData(res);
    }
}

export default displayResponse
