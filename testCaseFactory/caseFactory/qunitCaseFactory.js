export function qunitCaseFactory(funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }

    caseContent = caseContent + 'QUnit.module(\'' + funName + ' test Des' + (desIndex + 1) + '\');\n';

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.equal(res, ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.notEqual(res, ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.ok(res === ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.notOk(res === ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'QUnit.test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.equal(res, ' + expValue + ');\n' +
        '})\n\n';

    return caseContent;
};
