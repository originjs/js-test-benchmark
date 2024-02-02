export function spendTime() {
    let sum = 0;
    // 1000 * 1000 * 1 大约0.02s
    for (let i = 0; i < 1000; i++) {
        for (let j = 0; j < 10; j++) {
            for (let k = 0; k < 1; k++) {
                sum = sum + Math.random() * 10;
            }
        }
    }
}
