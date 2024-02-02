import * as config from '../../../testCaseFactory/config.js'
export function spendTime() {
    let ms = config.spendMillisecond.ms;
    let start = Date.now();
    let sum = 0;
    while (Date.now() - start < ms) {
        sum = sum + Math.random() * 10;
        if (sum > 100000000) {
            sum = sum % 10000;
        }
    }
}
