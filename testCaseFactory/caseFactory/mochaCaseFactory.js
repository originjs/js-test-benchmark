export function mochaCaseFactory(funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 'describe(\'' + funName + ' test Des' + (desIndex + 1) + '\', () => {\n';

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\',async () => {\n' +
        '        await C.loadAllWasm();\n' +
        '        let res = await ' + funContent + ';\n' +
        '        expect(res).equal(' + expValue + ');\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\',async () => {\n' +
        '        await C.loadAllWasm();\n' +
        '        let res = await ' + funContent + ';\n' +
        '        expect(res).not.equal(' + notExpValue + ');\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\',async () => {\n' +
        '        await C.loadAllWasm();\n' +
        '        let res = await ' + funContent + ';\n' +
        '        expect(res === ' + expValue + ').true;\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\',async () => {\n' +
        '        await C.loadAllWasm();\n' +
        '        let res = await ' + funContent + ';\n' +
        '        expect(res === ' + notExpValue + ').false;\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\',async () => {\n' +
        '        await C.loadAllWasm();\n' +
        '        let res = await ' + funContent + ';\n' +
        '        expect(res).equal(' + expValue + ');\n' +
        '    })\n\n';

    caseContent = caseContent + '});\n\n';

    return caseContent;
};
