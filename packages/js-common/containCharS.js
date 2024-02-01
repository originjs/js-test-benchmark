import {spendTime} from "./spendTime.js";
export function containCharS(...strs) {
    spendTime();
    let str = strs[0];
    if (str.toLowerCase().indexOf('S') !== -1) {
        return 'true';
    }
    return 'false';
}
