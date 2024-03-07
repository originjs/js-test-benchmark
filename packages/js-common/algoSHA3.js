import C from '@originjs/crypto-js-wasm';
import {spendTime} from "./spendTime/spendTime.js";
export async function algoSHA3(...strs) {
    let str = strs[0];
    await spendTime();
    await C.SHA3.loadWasm();
    const sha3 = C.SHA3(C.enc.Hex.parse(str), {
        outputLength: 256
    });
    return sha3.toString();
}
