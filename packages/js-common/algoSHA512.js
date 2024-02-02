import C from '@originjs/crypto-js-wasm';
import {spendTime} from "./spendTime/spendTime.js";
export async function algoSHA512(...strs) {
    let str = strs[0];
    spendTime();
    await C.SHA512.loadWasm();
    const sha512 = new C.algo.SHA512();
    for (let i = 0; i < 100; i++) {
        sha512.update(str);
    }
    return sha512.finalize().toString();
}
