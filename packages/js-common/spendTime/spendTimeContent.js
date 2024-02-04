import '../../../testCaseFactory/expandGlobal.js';

export function spendTime() {
    let ms = 0;
    try {
        let config = global.loadJSON('../../../testCaseFactory/config.json', import.meta.url);
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
