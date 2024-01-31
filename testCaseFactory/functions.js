exports.add = function (...nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    return num1 + num2;
};

exports.concatstring = function (...strs) {
    let str1 = strs[0];
    let str2 = strs[1];
    return str1.concat(str2);
};

exports.cutStrBeginAndEnd = function (...strs) {
    let str = strs[0];
    str = str.trim();
    if (str.length > 2) {
        return str.substring(1, str.length - 1);
    } else {
        return '';
    }
};

exports.factorial = function (...nums) {
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
};

exports.getLowerAndUpperCase = function (...strs) {
    let str = strs[0];
    return str.toLowerCase().concat(str.toUpperCase());
};

exports.containCharS = function (...strs) {
    let str = strs[0];
    if (str.toLowerCase().indexOf('S') !== -1) {
        return 'true';
    }
    return 'false';
};

exports.muti = function (...nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    return num1 * num2;
};

exports.parseNumber = function (...strs) {
    let str = strs[0];
    let num = Number(str);
    if (isNaN(num)) {
        return 0;
    }
};

exports.sub = function (...nums) {
    let num1 = nums[0];
    let num2 = nums[1];
    return num1 - num2;
};

exports.sum = function (...nums) {
    let res = 0;
    for (let num of nums) {
        res = num + res;
    }
    return res;
};
