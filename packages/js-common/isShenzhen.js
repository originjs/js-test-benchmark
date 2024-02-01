import {spendTime} from "./spendTime.js";
export function isShenzhen(address) {
    spendTime();
    if (address.toLowerCase().indexOf('shenzhen') !== -1) {
        return true;
    }
    return false;
}
