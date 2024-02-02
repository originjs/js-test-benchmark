export function avaCaseFactory(funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.is(res, ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.not(res, ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.true(res === ' + expValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.false(res === ' + notExpValue + ');\n' +
        '})\n\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.is(res, ' + expValue + ');\n' +
        '})\n\n';

    return caseContent;
};
