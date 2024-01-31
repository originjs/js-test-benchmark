exports.deleteFolder = function (dir) {
    const fs = require('fs');
    const path = require("path");
    let folder_exists = fs.existsSync(dir);
    if (folder_exists) {
        let fileList = fs.readdirSync(dir);
        fileList.forEach(file => {
            fs.unlinkSync(path.join(dir, file));
        });
        console.log('delete old *.test.js from ' + dir);
    }
};

exports.getRandomJson = function () {

    const path = require('path');
    const fs = require('fs');

    const binPath = __dirname;
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
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n;
}
