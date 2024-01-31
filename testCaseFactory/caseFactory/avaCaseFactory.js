exports.avaCaseFactory = function (funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.is(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.not(' + funContent + ', ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.true(' + funContent + ' === ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.false(' + funContent + ' === ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.is(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';

    return caseContent;
};
