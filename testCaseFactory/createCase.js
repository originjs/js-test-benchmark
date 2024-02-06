#!/usr/bin/env node
import * as utils from './utils.js';
import * as path from 'path';
import './expandGlobal.js';
import shell from 'shelljs';

// 获取并校验参数，第一个参数是测试文件数量（必须是10的倍数），第二个参数是单个文件内测试用例数量（必须是5的倍数），
// 总用例数（文件数*单个文件内用例数）必须小于100000
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

if (caseCountInfile * fileCount > 100000) {
    console.log("total case count must be less than 100,000");
    process.exit();
}
if (args[4] === undefined || args[4] === null || args[4] === "") {
    console.log("param spendMillisecond can not be null");
    process.exit();
}
let spendMillisecond = Number(args[4]);
utils.setConfigJson(spendMillisecond);

await utils.setSpendTimeEmpty();
let binPath = global.getDirName(import.meta.url);
let benchmarkPath = path.dirname(binPath);
let createPath = path.join(benchmarkPath,'testCaseFactory','create.js')
shell.exec(`node ${createPath} ${fileCount} ${caseCountInfile}`);
