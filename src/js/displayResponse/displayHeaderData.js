import { resultHeader } from "../domElements";

const displayHeaderData = (res) => {

    resultHeader.innerHTML = `
                <div class="display-header-data">
                    <div class="word-info">
                        <span class="word-response">${res[0].word}</span>
                        <span class="phonetic-sound"></span>
                        <p class="phonetic">
                            <span class="part-of-speech"></span>
                        </p>
                    </div>
                    <div class="phonetic-listen">
                        <i class="fa-solid fa-volume-high">
                            <audio src="" id="audio"></audio>
                        </i>
                    </div>
                </div>`;

    const partOfSpeech = document.querySelector('.part-of-speech');
    const phoneticSound = document.querySelector('.phonetic-sound');
    const audioElement = document.getElementById('audio');
    const phoneticListen = document.querySelector('.fa-volume-high');

    res.forEach(data => {

        data.phonetics.forEach(ph => {
            if (Object.prototype.hasOwnProperty.call(ph, 'text')) {
                phoneticSound.innerHTML = ph.text;
            }
            if (Object.prototype.hasOwnProperty.call(ph, 'audio') && ph.audio.length !== 0) {

                audioElement.src = ph.audio;

                phoneticListen.addEventListener('click', () => {
                    audioElement.play();
                    phoneticListen.classList.add("audio-listen");
                });

                audioElement.addEventListener('play', () => {
                    setTimeout(() => {
                        phoneticListen.classList.remove("audio-listen");
                    }, 1000);
                });
            };
        });

        data.meanings.forEach(meaning => {

            const regExp = new RegExp(`\\b${meaning.partOfSpeech}\\b`);

            if (!(regExp.test(partOfSpeech.innerHTML))) {
                partOfSpeech.innerHTML += `${meaning.partOfSpeech}, `;
            }
        });
    });

    partOfSpeech.innerHTML = partOfSpeech.innerHTML.slice(0, -2);

    const extension = audioElement.src.substring(audioElement.src.length - 3);

    if (extension !== "mp3") {
        audioElement.parentElement.classList.add('hide');
    } else {
        audioElement.parentElement.classList.remove('hide');
    };

};

export default displayHeaderData;