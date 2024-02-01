import {spendTime} from "./spendTime.js";
export function factorial(...nums) {
    spendTime();
    let num = nums[0];
    if (num > 10) {
        num = num % 10;
    }
    let sum = 1;
    for (let i = 1; i <= num; i++) {
        sum = sum * i;
    }
    sum = sum + Math.ceil(num / 10);
    return sum;
}
