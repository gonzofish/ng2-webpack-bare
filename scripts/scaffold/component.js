'use strict';

const fs = require('fs');
const path = require('path');

const ask = require('../ask-questions');
const inform = require('../inform');

const rootDir = path.resolve(__dirname, '..', '..');

module.exports = (selector) => {
    if (!selector) {
        ask(getQuestions(), processAnswers);
    } else {
        processAnswers({ selector: selector });
    }
};

const getQuestions = () => {
    return [
        { name: 'selector', question: 'Selector:' }
    ];
}

const processAnswers = answers => {
    createAppFiles(answers.selector);
    createTestFiles(answers.selector);
};

const createAppFiles = selector => {
    const appDir = path.resolve(rootDir, 'src', 'app', 'components', selector);
    const htmlFile = path.resolve(appDir, selector + '.component.html');
    const tsFile = path.resolve(appDir, selector + '.component.ts');
    const sassFile = path.resolve(appDir, selector + '.component.scss');
    const tsFileString = replaceAnswerValues(getTemplate('app'), selector);

    if (!fs.existsSync(appDir)) {
        inform(`Creating component at ${appDir}`);
        fs.mkdirSync(appDir);
        fs.writeFileSync(htmlFile, '', { encoding: 'utf8' });
        fs.writeFileSync(tsFile, tsFileString, { encoding: 'utf8' });
        fs.writeFileSync(sassFile, '', { encoding: 'utf8' });
    }
};

const createTestFiles = selector => {
    const specFile = path.resolve(rootDir, 'src', 'test', 'specs', 'components', selector + '.component.spec.ts');
    const specFileString = replaceAnswerValues(getTemplate('spec'), selector);

    if (!fs.existsSync(specFile)) {
        inform(`Creating test file at ${specFile}`);
        fs.writeFileSync(specFile, specFileString, { encoding: 'utf8' });
    }
};

const getTemplate = type => {
    const tsTemplateLocation = path.resolve(rootDir, 'scripts', 'templates', 'scaffold', 'component', type + '.ts');
    const tsTemplate = fs.readFileSync(tsTemplateLocation, 'utf8');

    return tsTemplate;
};

const replaceAnswerValues = (value, selector) => {
    const componentName = dashToCap(selector);
    const componentNameRegex = new RegExp(`\\{\\{\\s*componentName\\s*\\}\\}`, 'g');
    const selectorRegex = new RegExp(`\\{\\{\\s*selector\\s*\\}\\}`, 'g');

    return value.replace(componentNameRegex, componentName)
                    .replace(selectorRegex, selector);
};

const dashToCap = value => {
    return value[0].toUpperCase() + value.slice(1).replace(/(\-.)/g, match => match.replace('-', '').toUpperCase());
};