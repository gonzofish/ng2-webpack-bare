'use strict';

const path = require('path');

const ask = require('../ask-questions');

const scaffold = (cliArgs) => {
    const generator = getScaffoldGenerator(cliArgs[0]);
    let generatorArgs;

    if (typeof generator === 'function') {
        generatorArgs = cliArgs.length > 1 ? cliArgs.slice(1) : undefined;
        generator(generatorArgs);
    } else {
        askForType();
    }
};

const getScaffoldGenerator = type => {
    let generator;

    type = type ? type.replace(/^\-+/, '') : type;

    switch(type) {
        case 'component':
            generator = require('./component');
            break;
    }

    return generator;
};

const askForType = () => {
    ask([{ name: 'type' , question: 'Scaffold what (component)?' }], (answers) => {
        scaffold(answers.type.split(/\s+/));
    });
};

if (!module.parent) {
    scaffold(process.argv.slice(2));
}

module.exports = scaffold;