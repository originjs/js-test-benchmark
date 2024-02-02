import * as functions from "./functions.js";
import * as factory from "./caseFactory/factory.js";

export let spendMillisecond =
{
    ms: 500
};
export let functionList = [
    {
        name: 'algoSHA1',
        fun: functions.algoSHA1,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoSHA3',
        fun: functions.algoSHA3,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoSHA224',
        fun: functions.algoSHA224,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoSHA256',
        fun: functions.algoSHA256,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoSHA384',
        fun: functions.algoSHA384,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoSHA512',
        fun: functions.algoSHA512,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'algoTripledes',
        fun: functions.algoTripledes,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'hmacMD5',
        fun: functions.hmacMD5,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'hmacSHA224',
        fun: functions.hmacSHA224,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'hmacSHA256',
        fun: functions.hmacSHA256,
        isParamNumber: false,
        isReturnNumber: false
    }
];
export let frameworkList = [
    {
        name: 'ava',
        factory: factory.ava,
        extraImport: 'import test from \'ava\';\n'
    },
    {
        name: 'jasmine',
        factory: factory.jasmine,
        extraImport: ''
    },
    {
        name: 'jest',
        factory: factory.jest,
        extraImport: ''
    },
    {
        name: 'mocha',
        factory: factory.mocha,
        extraImport: 'import {describe, it} from "mocha";\n' +
            'import {expect} from "chai";\n'
    },
    {
        name: 'qunit',
        factory: factory.qunit,
        extraImport: ''
    },
    {
        name: 'tape',
        factory: factory.tape,
        extraImport: 'import test from \'tape\';\n'
    },
    {
        name: 'tapjs',
        factory: factory.tapjs,
        extraImport: 'import t from \'tap\';\n'
    },
    {
        name: 'vitest',
        factory: factory.vitest,
        extraImport: 'import {describe, it, expect} from "vitest";\n'
    },
    {
        name: 'uvu',
        factory: factory.uvu,
        extraImport: 'import {test} from \'uvu\';\n' +
            'import * as assert from \'uvu/assert\';\n;'
    }
];
