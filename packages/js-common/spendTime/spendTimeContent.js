import * as fs from 'fs';

export function spendTime() {
    let ms = 0;
    try {
        let data = fs.readFileSync('../../testCaseFactory/config.json', {
            encoding: 'utf8',
            flag: 'r'
        }, (err) => {
        });
        let config = JSON.parse(data);
        ms = config.ms;
    } catch (err) {
        console.log(err);
    }
    let start = Date.now();
    let sum = 0;
    while (Date.now() - start < ms) {
        sum = sum + Math.random() * 10;
        if (sum > 100000000) {
            sum = sum % 10000;
        }
    }
}
