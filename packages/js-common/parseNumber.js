import {spendTime} from "./spendTime.js";
export function parseNumber(...strs) {
    spendTime();
    let str = strs[0];
    let num = Number(str);
    if (isNaN(num)) {
        return 0;
    }
}
