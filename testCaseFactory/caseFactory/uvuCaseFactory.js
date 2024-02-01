exports.uvuCaseFactory = function (funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', () => {\n' +
        '    assert.is(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', () => {\n' +
        '    assert.is.not(' + funContent + ', ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', () => {\n' +
        '    assert.ok(' + funContent + ' === ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', () => {\n' +
        '    assert.not(' + funContent + ' === ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', () => {\n' +
        '    assert.is(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';

    caseContent = caseContent + "test.run();\n";

    return caseContent;
};
