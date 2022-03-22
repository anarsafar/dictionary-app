import modifyDefinitions from "./modifyDefinitions";
import groupDefinitions from "./groupDefinitions";
import displayCards from "./displayCards";
import { result } from "../domElements";

const displayBodyData = (res) => {
    result.innerHTML = '';

    const groupedDefinitions = groupDefinitions(res);
    const modifiedDefs = modifyDefinitions(groupedDefinitions);

    Object.entries(modifiedDefs).forEach(([key, value]) => {
        const definitionWithExamples = [];
        const definitionWithoutExamples = [];
        let synonyms = [];
        let antonyms = [];

        value.forEach(val => {
            val.definitions.forEach(def => {

                if (Object.prototype.hasOwnProperty.call(def, 'example')) {
                    definitionWithExamples.push(def);
                } else {
                    definitionWithoutExamples.push(def);
                };
            });

            if (val.synonyms.length !== 0) {
                synonyms = [...val.synonyms];
            }

            if (val.antonyms.length !== 0) {
                antonyms = [...val.antonyms];
            }

        });

        if (definitionWithExamples.length !== 0) {
            const getRandomDefIndex = Math.floor(Math.random() * definitionWithExamples.length);
            const getRandomDef = definitionWithExamples[getRandomDefIndex];
            displayCards(getRandomDef, key, synonyms, antonyms);
        } else {
            const getRandomDefIndex = Math.floor(Math.random() * definitionWithoutExamples.length);
            const getRandomDef = definitionWithoutExamples[getRandomDefIndex];
            displayCards(getRandomDef, key, synonyms, antonyms);
        }
    })
};

export default displayBodyData;