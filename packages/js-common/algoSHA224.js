import C from '@originjs/crypto-js-wasm';
import {spendTime} from "./spendTime/spendTime.js";
export async function algoSHA224(...strs) {
    let str = strs[0];
    spendTime();
    await C.SHA224.loadWasm();
    const sha244 = C.SHA224(str).toString();
    return sha244;
}
