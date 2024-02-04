import * as path from 'path';
import * as fs from 'fs';
import './expandGlobal.js';

export function deleteFolder(dir) {
    let folder_exists = fs.existsSync(dir);
    if (folder_exists) {
        let fileList = fs.readdirSync(dir);
        fileList.forEach(file => {
            fs.unlinkSync(path.join(dir, file));
        });
        console.log('delete old *.test.js from ' + dir);
    }
};

export function setSpendTimeEmpty() {
    const binPath = global.getDirName(import.meta.url);
    const spendTimePath = path.join(binPath, '../packages/js-common/spendTime/spendTime.js');
    const spendTimeEmptyPath = path.join(binPath, '../packages/js-common/spendTime/spendTimeEmpty.js');
    let data = fs.readFileSync(spendTimeEmptyPath, {
        encoding: 'utf8',
        flag: 'r'
    }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.writeFileSync(spendTimePath, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('set spendTime to empty success');
        }
    });
}

export function setSpendTimeContent() {
    const binPath = global.getDirName(import.meta.url);
    const spendTimePath = path.join(binPath, '../packages/js-common/spendTime/spendTime.js');
    const spendTimeContentPath = path.join(binPath, '../packages/js-common/spendTime/spendTimeContent.js');
    let data = fs.readFileSync(spendTimeContentPath, {
        encoding: 'utf8',
        flag: 'r'
    }, (err) => {
        if (err) {
            console.log(err);
        }
    });
    fs.writeFileSync(spendTimePath, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('set spendTime to empty success');
        }
    });
}

export function setConfigJson(ms) {
    const binPath = global.getDirName(import.meta.url);
    const jsonPath = path.join(binPath, 'config.json');
    let j = {}
    j.ms = ms;

    let jsonContent = JSON.stringify(j);
    fs.writeFileSync(jsonPath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.log('err:' + err);
        } else {
            console.log('update config json file success!');
        }
    });
}

export function getRandomJson() {
    const binPath = global.getDirName(import.meta.url);
    const jsonPath = path.join(binPath, 'randomData.json');

    let numbers = [];
    let strings = [];
    let j = {};
    j.numbers = numbers;
    j.strings = strings;

    for (let i = 0; i < 400000; i++) {
        numbers.push(Math.ceil(Math.random() * 10000));
        strings.push(randomString(4));
    }

    let jsonContent = JSON.stringify(j);
    fs.writeFileSync(jsonPath, jsonContent, 'utf8', (err) => {
        if (err) {
            console.log('err:' + err);
        } else {
            console.log('create random json file success!');
        }
    });
};

function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
