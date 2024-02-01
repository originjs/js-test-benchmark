import {spendTime} from "./spendTime.js";
export function concatstring(...strs) {
    spendTime();
    let str1 = strs[0];
    let str2 = strs[1];
    return str1.concat(str2);
}
