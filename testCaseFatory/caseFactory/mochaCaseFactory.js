exports.mochaCaseFactory = function (funName, funContent, expValue, desIndex, caseIndex, isReturnNumber) {
    let caseContent = '';
    let index = caseIndex;
    let notExpValue = expValue + 1;
    if (!isReturnNumber) {
        notExpValue = expValue.replaceAll('\'', '');
        notExpValue = notExpValue + '1';
        notExpValue = '\'' + notExpValue + '\'';
    }
    caseContent = caseContent + 'describe(\'' + funName + ' test Des' + (desIndex + 1) + '\', () => {\n';

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\', () => {\n' +
        '        expect(' + funContent + ').equal(' + expValue + ');\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\', () => {\n' +
        '        expect(' + funContent + ').not.equal(' + notExpValue + ');\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\', () => {\n' +
        '        expect(' + funContent + ' === ' + expValue + ').true;\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\', () => {\n' +
        '        expect(' + funContent + ' === ' + notExpValue + ').false;\n' +
        '    })\n\n';
    index = index + 1;

    caseContent = caseContent + 'it(\'' + funName + ' No.' + index + '\', () => {\n' +
        '        expect(' + funContent + ').equal(' + expValue + ');\n' +
        '    })\n\n';

    caseContent = caseContent + '});\n\n';

    return caseContent;
};
