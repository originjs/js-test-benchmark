export function getLowerAndUpperCase(...strs) {
    let str = strs[0];
    return str.toLowerCase().concat(str.toUpperCase());
}
