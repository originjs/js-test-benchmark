import {spendTime} from "./spendTime.js";
export function sum(...nums) {
  spendTime();
  let res = 0;
  for (let num of nums) {
    res = num + res;
  }
  return res;
}
