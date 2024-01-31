export function parseNumber(...strs) {
    let str = strs[0];
    let num = Number(str);
    if (isNaN(num)) {
        return 0;
    }
}
