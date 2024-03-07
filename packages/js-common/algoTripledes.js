import C from '@originjs/crypto-js-wasm';
import {spendTime} from "./spendTime/spendTime.js";
export async function algoTripledes(...strs) {
    let str = strs[0];
    await spendTime();
    await C.TripleDES.loadWasm();
    await C.SHA256.loadWasm();
    const res = C.TripleDES.encrypt('Hi There', C.SHA256(str), {
        mode: C.mode.ECB,
        padding: C.pad.NoPadding
    }).toString();
    return res;
}
