import {spendTime} from "./spendTime.js";
export function getLowerAndUpperCase(...strs) {
    spendTime();
    let str = strs[0];
    return str.toLowerCase().concat(str.toUpperCase());
}
