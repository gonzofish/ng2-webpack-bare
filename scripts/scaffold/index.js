'use strict';

const path = require('path');

const scaffold = () => {
    const generator = getScaffoldGenerator(process.argv[2]);

    if (typeof generator === 'function') {
        generator();
    }
};

const getScaffoldGenerator = type => {
    let generator;

    switch(type.replace(/^\-+/, '')) {
        case 'component':
            generator = require('./component');
            break;
    }

    return generator;
};

if (!module.parent) {
    scaffold();
}

module.exports = scaffold;