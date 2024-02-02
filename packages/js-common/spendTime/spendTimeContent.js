export function spendTime() {
    let ms = process.env.SPEND_MILLISECOND ? Number(process.env.SPEND_MILLISECOND) : 1000;
    let start = Date.now();
    let sum = 0;
    while (Date.now() - start < ms) {
        sum = sum + Math.random() * 10;
        if (sum > 100000000) {
            sum = sum % 10000;
        }
    }
}
