const modifyDefinitions = (groupedDefinitions) => {
    const modifiedDefinitions = {};

    Object.entries(groupedDefinitions).forEach(([key, value]) => {

        if (value.length > 1) {
            const tempValue = [];

            value.forEach(val => {
                let ifHasExample = false;

                for (let i = 0; i < val.definitions.length; i += 1) {
                    if (Object.prototype.hasOwnProperty.call(val.definitions[i], 'example')) {
                        ifHasExample = !ifHasExample;
                        break;
                    };
                }
                if (ifHasExample) {
                    tempValue.push(val);
                };
            });

            if (tempValue.length > 0) {
                if (Object.prototype.hasOwnProperty.call(modifiedDefinitions, key)) {
                    modifiedDefinitions[key] = tempValue;
                } else {
                    modifiedDefinitions[key] = {};
                    modifiedDefinitions[key] = tempValue;
                }
            } else if (Object.prototype.hasOwnProperty.call(modifiedDefinitions, key)) {
                modifiedDefinitions[key] = value;
            } else {
                modifiedDefinitions[key] = {};
                modifiedDefinitions[key] = value;
            }
        } else {
            modifiedDefinitions[key] = {};
            modifiedDefinitions[key] = value;
        }
    });
    return modifiedDefinitions;
}

export default modifyDefinitions;