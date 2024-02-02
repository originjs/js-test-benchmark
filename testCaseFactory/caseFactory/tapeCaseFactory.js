export function tapeCaseFactory(funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
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
        '    assert.equal(res, ' + expValue + ');\n' +
        '    assert.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.notEqual(res, ' + notExpValue + ');\n' +
        '    assert.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.true(res === ' + expValue + ');\n' +
        '    assert.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.false(res === ' + notExpValue + ');\n' +
        '    assert.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 'test(\'' + funName + ' No.' + index + '\', async assert => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    assert.equal(res, ' + expValue + ');\n' +
        '    assert.end();\n\n' +
        '})\n';

    return caseContent;
};
