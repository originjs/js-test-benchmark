export function tapjsCaseFactory(funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', async t => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    t.equal(res, ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', async t => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    t.not(res, ' + notExpValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', async t => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    t.ok(res === ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', async t => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    t.notOk(res === ' + notExpValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';
    index = index + 1;

    caseContent = caseContent + 't.test(\'' + funName + ' No.' + index + '\', async t => {\n' +
        '    await C.loadAllWasm();\n' +
        '    let res = await ' + funContent + ';\n' +
        '    t.equal(res, ' + expValue + ');\n' +
        '    t.end();\n\n' +
        '})\n';

    return caseContent;
};
