export function cutStrBeginAndEnd(str) {
    str = str.trim();
    if (str.length > 2) {
        return str.substring(1, str.length - 1);
    } else {
        return '';
    }

}
