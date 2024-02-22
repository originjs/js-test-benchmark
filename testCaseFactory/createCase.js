#!/usr/bin/env node
import * as utils from './utils.js';
import * as path from 'path';
import './expandGlobal.js';
import shell from 'shelljs';

// get and match params，
// the first parameter is the number of test files (must be a multiple of 10),
// the second parameter is the number of test cases within a single file (must be a multiple of 5)，
// Tip: The total number of use cases (number of files * number of use cases within a single file) must be less than 100000
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
    console.log("param cpu spendMillisecond can not be null");
    process.exit();
}
let cpuTime = Number(args[4]);
if (args[5] === undefined || args[5] === null || args[5] === "") {
    console.log("param io spendMillisecond can not be null");
    process.exit();
}
let ioTime = Number(args[5]);
utils.setConfigJson(cpuTime, ioTime);

await utils.setSpendTimeEmpty();
let binPath = global.getDirName(import.meta.url);
let benchmarkPath = path.dirname(binPath);
let createPath = path.join(benchmarkPath,'testCaseFactory','create.js')
shell.exec(`node ${createPath} ${fileCount} ${caseCountInfile}`);
