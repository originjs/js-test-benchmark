export function containCharS(...strs) {
    let str = strs[0];
    if (str.toLowerCase().indexOf('S') !== -1) {
        return 'true';
    }
    return 'false';
}
