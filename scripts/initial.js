'use strict';

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');

const ask = require('balsa/libs/ask');
const inform = require('./inform');

const allQuestions = [
    { name: 'readmeName', question: 'README title:' },
    { name: 'repoName', question: 'package.json name:' },
    { name: 'repoUrl', question: 'Repository URL:' }
];
const rootDir = path.resolve(__dirname, '..');

const processAnswers = answers => {
    createNewPackageJson(answers[1], answers[2]);
    createNewReadme(answers[0]);
    initGit();

    console.info(`"${answers[0].answer}" is all set up!`);
};

const createNewPackageJson = (name, repoUrl) => {
    const defaultPackageJson = path.resolve(rootDir, 'scripts', 'templates', 'meta-files', 'package.json');
    const destinationPackageJson = path.resolve(rootDir, 'package.json');
    let packageJson = fs.readFileSync(defaultPackageJson, 'utf8');

    inform(`Creating new "package.json"`);

    packageJson = packageJson.replace('ng2-webpack-bare', name.answer)
        .replace('"version": "1.0.0"', '"version": "0.0.0"')
        .replace('"url": "https://github.com/gonzofish/ng2-webpack-bare.git"', `"url": "${repoUrl.answer}"`);

    fs.writeFileSync(destinationPackageJson, packageJson, { encoding: 'utf8' });
};

const createNewReadme = readmeTitle => {
    const destinationReadme = path.resolve(rootDir, 'README.md');
    const readme = `#${readmeTitle.answer}`;

    inform(`Creating new "README.md"`);
    fs.writeFileSync(destinationReadme, readme, { encoding: 'utf8' });
};

const initGit = () => {
    deleteFolder(path.resolve(rootDir, '.git'), true);
    createGitProject();
};

const deleteFolder = (folderPath, topLevel) => {
    if (fs.existsSync(folderPath)) {
        if (topLevel) {
            inform(`Deleting ${folderPath}`);
        }

        fs.readdirSync(folderPath).forEach((file, index) => {
            const filePath = path.resolve(folderPath, file);

            if (fs.lstatSync(filePath).isDirectory()) {
                deleteFolder(filePath);
            } else {
                fs.unlinkSync(filePath);
            }
        });

        fs.rmdirSync(folderPath);
    }
};

const createGitProject = () => {
    const startingDir = __dirname;

    inform(`Running \`git init\` in "${rootDir}"`);
    process.chdir(rootDir);
    childProcess.execSync('git init');
    process.chdir(startingDir);
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
ask(allQuestions, processAnswers);