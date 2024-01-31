exports.qunitCaseFactory = function (funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }

    caseContent = caseContent + 'QUnit.module(\'' + funName + ' test Des' + (desIndex + 1) + '\');\n';

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.equal(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.notEqual(' + funContent + ', ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.ok(' + funContent + ' === ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.notOk(' + funContent + ' === ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', assert => {\n' +
        '    assert.equal(' + funContent + ', ' + expValue + ');\n' +
        '})\n\n';

    return caseContent;
};
