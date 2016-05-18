'use strict';

const fs = require('fs');
const path = require('path');

const scaffold = require('../scaffold');
const inform = require('../inform');

const rootDir = path.resolve(__dirname, '..', '..');

module.exports = (selector) => {
    const files = getFiles();

    if (!selector || selector.length === 0) {
        scaffold.ask(getQuestions(), files);
    } else {
        scaffold.process([
            { name: 'selector', answer: selector[0] },
            { name: 'componentName', answer: dashToCap(selector[0]) }
        ], files);
    }
};

const getFiles = () => {
    return getAppFiles().concat(getTestFiles());
};

const getAppFiles = () => {
    const appDir = path.resolve(rootDir, 'src', 'app', 'components', '{{ selector }}');

    return [
        { template: getTemplate('app'), destination: path.resolve(appDir, '{{ selector }}.component.ts') },
        { destination: path.resolve(appDir, '{{ selector }}.component.html') },
        { destination: path.resolve(appDir, '{{ selector }}.component.scss') }
    ];
};

const getTestFiles = () => {
    const specFile = path.resolve(rootDir, 'src', 'test', 'specs', 'components', '{{ selector }}.component.spec.ts');

    return [
        { template: getTemplate('spec'), destination: specFile }
    ];
};

const getTemplate = type => {
    const tsTemplateLocation = path.resolve(rootDir, 'scripts', 'templates', 'scaffold', 'component', type + '.ts');
    const tsTemplate = fs.readFileSync(tsTemplateLocation, 'utf8');

    return tsTemplate;
};

const getQuestions = () => {
    return [
        { name: 'selector', question: 'Selector:' },
        { name: 'componentName', useAnswer: 'selector', transform: dashToCap}
    ];
};

const dashToCap = value => {
    return value[0].toUpperCase() + value.slice(1).replace(/(\-.)/g, match => match.replace('-', '').toUpperCase());
};