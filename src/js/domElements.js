const input = document.querySelector('input');
const magnifyingIcon = document.querySelector('.fa-magnifying-glass');
const form = document.querySelector('form');
const clearBtn = document.querySelector(".clear-btn");
const info = document.querySelector('.info');
const resultContainer = document.querySelector('.result-container');
const resultHeader = document.querySelector('.result-header');
const result = document.querySelector('.result');
const headerWord = document.querySelector('.word-response');
const partOfSpeech = document.querySelector('.part-of-speech');
const phoneticSound = document.querySelector('.phonetic-sound');
const audioElement = document.getElementById('audio');
const phoneticListen = document.querySelector('.fa-volume-high');
// const displayResultContainer = document.querySelector('.result-body');
// const exampleContainer = document.querySelector('.example');
// const exampleText = document.querySelector('.example-text');
// const definitionText = document.querySelector('.definition-text');
// const definitionContainer = document.querySelector('.meaning');

export {
    input,
    magnifyingIcon,
    form,
    clearBtn,
    info,
    resultContainer,
    resultHeader,
    result,
    headerWord,
    partOfSpeech,
    phoneticSound,
    phoneticListen,
    audioElement,
    // displayResultContainer
    // exampleText,
    // exampleContainer,
    // definitionText,
    // definitionContainer
}