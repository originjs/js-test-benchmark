import * as fs from 'fs';

export function spendTime() {
    let cpuTime = 0;
    let ioTime = 0;
    try {
        let data = fs.readFileSync('../../testCaseFactory/config.json', {
            encoding: 'utf8',
            flag: 'r'
        }, (err) => {
        });
        let config = JSON.parse(data);
        cpuTime = config.cpuTime;
        ioTime = config.ioTime;
    } catch (err) {
        console.log(err);
    }
    let start = Date.now();
    let sum = 0;
    while (Date.now() - start < cpuTime) {
        sum = sum + Math.random() * 10;
        if (sum > 100000000) {
            sum = sum % 10000;
        }
    }

    start = Date.now();
    let i = 0;
    while (Date.now() - start < ioTime) {
        let tempData = fs.readFileSync('../../testCaseFactory/fileData.txt', {
            encoding: 'utf8',
            flag: 'r'
        }, (err) => {
        });
        let tempFilePath = '../../testCaseFactory/tempForSpendTime' + i + '.txt';
        fs.writeFileSync(tempFilePath, tempData, 'utf8', (err) => {
            if (err) {
                console.log('err:' + err);
            } else {
                console.log('create temp json file success!');
            }
        });
        i++;
    }
}
