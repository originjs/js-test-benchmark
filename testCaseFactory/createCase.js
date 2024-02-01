#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const utils = require('./utils.js');
const functions = require('./functions.js');
const factory = require("./caseFactory/factory");

// 获取并校验参数，参数需要是50的倍数且小于100000
const args = process.argv;
if (args[2] === undefined || args[2] === null || args[2] === "") {
    console.log("param count can not be null");
    process.exit();
}
let count = Number(args[2]);
if (count % 50 !== 0) {
    console.log("param must be a multiple of 100");
    process.exit();
}
if (count > 100000) {
    console.log("param must be less than 100,000");
    process.exit();
}

//获取随机数数组
let jsonData;
try {
    jsonData = require('./randomData.json');
    if (!jsonData) {
        utils.getRandomJson();
        jsonData = require('./randomData.json');
    }
} catch (err) {
    utils.getRandomJson();
    jsonData = require('./randomData.json');
}

// 基础常亮
let binPath = __dirname;
let benchmarkPath = path.dirname(binPath);
let singleFileCaseCount = count / 10;
let desCount = singleFileCaseCount / 5;
let functionList = [
    {
        name: 'add',
        fun: functions.add,
        isParamNumber: true,
        isReturnNumber: true
    },
    {
        name: 'concatstring',
        fun: functions.concatstring,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'cutStrBeginAndEnd',
        fun: functions.cutStrBeginAndEnd,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'factorial',
        fun: functions.factorial,
        isParamNumber: true,
        isReturnNumber: true
    },
    {
        name: 'getLowerAndUpperCase',
        fun: functions.getLowerAndUpperCase,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'containCharS',
        fun: functions.containCharS,
        isParamNumber: false,
        isReturnNumber: false
    },
    {
        name: 'muti',
        fun: functions.muti,
        isParamNumber: true,
        isReturnNumber: true
    },
    {
        name: 'parseNumber',
        fun: functions.parseNumber,
        isParamNumber: false,
        isReturnNumber: true

    },
    {
        name: 'sub',
        fun: functions.sub,
        isParamNumber: true,
        isReturnNumber: true
    },
    {
        name: 'sum',
        fun: functions.sum,
        isParamNumber: true,
        isReturnNumber: true
    }
];
let frameworkList = [
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
for (let i = 0; i < frameworkList.length; i++) {
    let framework = frameworkList[i];
    let frameworkPath = path.join(benchmarkPath, 'packages', framework.name, 'tests', 'functions');
    utils.deleteFolder(frameworkPath);

    for (let j = 0; j < functionList.length; j++) {
        let fun = functionList[j];
        let caseContent = 'import {' + fun.name + '} from \'../../../js-common/' + fun.name + '.js\';\n';
        caseContent = caseContent + framework.extraImport;
        let caseIndex = 1;
        let dataIndex = 0;
        for (let k = 0; k < desCount; k++) {
            let a = jsonData.numbers[dataIndex];
            let b = jsonData.numbers[dataIndex + 1];
            let funContent = fun.name + '(' + a + ',' + b + ')';
            let expValue;
            if (!fun.isParamNumber) {
                a = jsonData.strings[dataIndex];
                b = jsonData.strings[dataIndex + 1];
                funContent = fun.name + '(\'' + a + '\',\'' + b + '\')';
            }
            if (!fun.isReturnNumber) {
                expValue = '\'' + fun.fun(a, b) + '\'';
            } else {
                expValue = fun.fun(a, b);
            }

            dataIndex = dataIndex + 2;

            caseContent = caseContent + framework.factory(fun.name, funContent, expValue, k, caseIndex, fun.isReturnNumber);
            caseIndex = caseIndex + 5;
        }
        let casePath = path.join(frameworkPath, fun.name + '.test.js');
        fs.writeFileSync(casePath, caseContent, (err) => {
            if (err) {
                console.log(err);
                return;
            }
        });
        console.log('add ' + casePath);
    }

}

