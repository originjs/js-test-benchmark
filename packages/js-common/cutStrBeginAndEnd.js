import {spendTime} from "./spendTime.js";
export function cutStrBeginAndEnd(...strs) {
    spendTime();
    let str = strs[0];
    str = str.trim();
    if (str.length > 2) {
        return str.substring(1, str.length - 1);
    } else {
        return '';
    }

}
