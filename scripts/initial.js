'use strict';

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const allQuestions = [
    { name: 'readmeName', question: 'README title:' },
    { name: 'repoName', question: 'package.json name:' },
    { name: 'repoUrl', question: 'Repository URL:' }
];
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const rootDir = path.resolve(__dirname, '..');

const askQuestions = (questions, answers) => {
    const question = questions[0];
    const remainingQuestions = questions.slice(1);

    reader.question(question.question.trim() + ' ', answer => {
        if (!!answer) {
            answers[question.name] = answer;

            if (remainingQuestions.length > 0) {
                askQuestions(remainingQuestions, answers);
            } else {
                reader.close();
                processAnswers(answers)
            }
        } else {
            askQuestions(questions, answers);
        }
    });
};

const processAnswers = (answers) => {
    createNewPackageJson(answers.repoName, answers.repoUrl);
    createNewReadme(answers.readmeName);

    console.info(`"${answers.readmeName}" is all set up!`);
};

const createNewPackageJson = (name, repoUrl) => {
    const defaultPackageJson = path.resolve(rootDir, 'scripts', 'default-meta-files', 'package.json');
    const destinationPackageJson = path.resolve(rootDir, 'package.json');
    let packageJson = fs.readFileSync(defaultPackageJson, 'utf8');

    packageJson = packageJson.replace('ng2-webpack-bare', name)
        .replace('"version": "1.0.0"', '"version": "0.0.0"')
        .replace('"url": "https://github.com/gonzofish/ng2-webpack-bare.git"', `"url": "${repoUrl}"`);

    fs.writeFileSync(destinationPackageJson, packageJson, { encoding: 'utf8' });
};

const createNewReadme = readmeTitle => {
    const destinationReadme = path.resolve(rootDir, 'README.md');
    const readme = `#${readmeTitle}`;

    fs.writeFileSync(destinationReadme, readme, { encoding: 'utf8' });
};

console.info(`
****************************************
* If you are contributing, press       *
* Ctrl+C now to avoid overwriting any  *
* of the meta-files!                   *
*                                      *
* Otherwise, follow the prompts!       *
* Enjoy!                               *
****************************************
`);
askQuestions(allQuestions, {});