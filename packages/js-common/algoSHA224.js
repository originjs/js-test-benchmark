import C from '@originjs/crypto-js-wasm';

export async function algoSHA224(...strs) {
    let str = strs[0];
    await C.SHA224.loadWasm();
    const sha244 = C.SHA224(str).toString();
    return sha244;
}
