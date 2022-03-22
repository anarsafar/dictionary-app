import { audioElement, headerWord, partOfSpeech, phoneticListen, phoneticSound } from "../domElements"

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

export default displayHeaderData;