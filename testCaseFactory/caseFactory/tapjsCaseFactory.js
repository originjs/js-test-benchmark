exports.tapjsCaseFactory = function (funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', t => {\n' +
        '    t.equal(' + funContent + ', ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', t => {\n' +
        '    t.not(' + funContent + ', ' + notExpValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', t => {\n' +
        '    t.ok(' + funContent + ' === ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', t => {\n' +
        '    t.notOk(' + funContent + ' === ' + notExpValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', t => {\n' +
        '    t.equal(' + funContent + ', ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';

    return caseContent;
};
