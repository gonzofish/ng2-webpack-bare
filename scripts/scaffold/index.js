'use strict';

const fs = require('fs');
const path = require('path');
const ask = require('./ask');

const rootDir = path.resolve(__dirname, '..', '..');

const askQuestions = (questions, files) => {
    ask(questions, answers => {
        process(answers, files);
    });
};

const process = (answers, files) => {
    files.forEach(file => {
        const destination = performReplacements(file.destination, answers);

        ensureDirs(destination);

        if (!fs.existsSync(destination)) {
            const output = performReplacements(file.template, answers);
            fs.writeFile(destination, output, { encoding: 'utf8' });
        }
    });
};

const ensureDirs = filePath => {
    const paths = filePath.replace(rootDir, '').split(path.sep).slice(1, -1);

    paths.reduce((previousPath, directory) => {
        const currentPath = path.resolve(previousPath, directory);

        if (!fs.existsSync(currentPath)) {
            fs.mkdirSync(currentPath);
        }

        return currentPath;
    }, rootDir);
};

const performReplacements = (template, answers) => {
    let output = '';

    if (template && typeof template === 'string') {
        output = answers.reduce(replaceAnswer, template);
    }

    return output;
};

const replaceAnswer = (template, answer) => {
    const regex = new RegExp(`\\{\\{\\s*${answer.name}\\s*\\}\\}`, 'g');
    const newTemplate = template.replace(regex, answer.answer);

    return newTemplate;
};

module.exports = {
    ask: askQuestions,
    process: process
};