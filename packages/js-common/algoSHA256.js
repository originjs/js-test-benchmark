import C from '@originjs/crypto-js-wasm';
import {spendTime} from "./spendTime/spendTime.js";
export async function algoSHA256(...strs) {
    let str = strs[0];
    await spendTime();
    await C.SHA256.loadWasm();
    let sha256 = new C.algo.SHA256();
    for (let i = 0; i < 100; i++) {
        sha256.update(str);
    }
    return sha256.finalize().toString();
}
