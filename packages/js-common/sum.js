export function sum(...nums) {
  let res = 0;
  for (let num of nums) {
    res = num + res;
  }
  return res;
}
