const groupDefinitions = (response) => {
    const newDefinitions = {};

    response.forEach(data => {
        data.meanings.forEach(meaning => {
            if (Object.prototype.hasOwnProperty.call(newDefinitions, meaning.partOfSpeech)) {
                newDefinitions[meaning.partOfSpeech].push(meaning);
            } else {
                newDefinitions[meaning.partOfSpeech] = [];
                newDefinitions[meaning.partOfSpeech].push(meaning);
            };
        });
    });

    return newDefinitions;
};

export default groupDefinitions;