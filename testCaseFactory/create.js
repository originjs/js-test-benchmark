#!/usr/bin/env node
import * as path from 'path';
import * as fs from 'fs';
import * as utils from './utils.js';
import {functionList, frameworkList} from './config.js';
import './expandGlobal.js';

const args = process.argv;
if (args[2] === undefined || args[2] === null || args[2] === "") {
    console.log("param fileCount can not be null");
    process.exit();
}
let fileCount = Number(args[2]);
if (fileCount % 10 !== 0) {
    console.log("param must be a multiple of 10");
    process.exit();
}

if (args[2] === undefined || args[2] === null || args[2] === "") {
    console.log("param caseCountInfile can not be null");
    process.exit();
}
let caseCountInfile = Number(args[3]);
if (caseCountInfile % 5 !== 0) {
    console.log("param must be a multiple of 5");
    process.exit();
}

//获取随机数数组
let jsonData;
try {
    jsonData = global.loadJSON('./randomData.json', import.meta.url);
    if (!jsonData) {
        utils.getRandomJson();
        jsonData = global.loadJSON('./randomData.json', import.meta.url);
    }
} catch (err) {
    utils.getRandomJson();
    jsonData = global.loadJSON('./randomData.json', import.meta.url);
}

let binPath = global.getDirName(import.meta.url);
let benchmarkPath = path.dirname(binPath);
let desCount = caseCountInfile / 5;

async function create() {
    for (let i = 0; i < frameworkList.length; i++) {
        let framework = frameworkList[i];
        let frameworkPath = path.join(benchmarkPath, 'packages', framework.name, 'tests', 'functions');
        utils.deleteFolder(frameworkPath);

        for (let j = 0; j < functionList.length; j++) {
            let dataIndex = 0;
            for (let f = 1; f <= fileCount / 10; f++) {
                let fun = functionList[j];
                let caseContent = 'import {' + fun.name + '} from \'../../../js-common/' + fun.name + '.js\';\n';
                caseContent = caseContent + 'import C from \'@originjs/crypto-js-wasm\';\n';
                caseContent = caseContent + framework.extraImport;
                let caseIndex = 1;
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
                    let res = await fun.fun(a, b);
                    if (!fun.isReturnNumber) {
                        expValue = '\'' + res + '\'';
                    } else {
                        expValue = res;
                    }

                    dataIndex = dataIndex + 2;

                    caseContent = caseContent + framework.factory(fun.name, funContent, expValue, k, caseIndex, fun.isReturnNumber);
                    caseIndex = caseIndex + 5;
                }
                let casePath = path.join(frameworkPath, fun.name + '_' + f + '.test.js');
                fs.writeFileSync(casePath, caseContent, (err) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                });
                console.log('add ' + casePath);
            }
        }

    }
    await utils.setSpendTimeContent();
}

await create();
