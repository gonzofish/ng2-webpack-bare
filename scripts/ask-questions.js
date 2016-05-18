const readline = require('readline');

const ask = (questions, callback) => {
    const reader = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    askQuestions(questions, {}, reader, callback);
};

const askQuestions = (questions, answers, reader, callback) => {
    const question = questions[0];
    const remainingQuestions = questions.slice(1);

    reader.question(question.question.trim() + ' ', answer => {
        if (!!answer) {
            answers[question.name] = answer;

            if (remainingQuestions.length > 0) {
                askQuestions(remainingQuestions, answers, reader, callback);
            } else {
                reader.close();
                callback(answers);
            }
        } else {
            askQuestions(questions, answers);
        }
    });
};

module.exports = ask;