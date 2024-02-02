import C from '@originjs/crypto-js-wasm';

export async function algoSHA3(...strs) {
    let str = strs[0];
    await C.SHA3.loadWasm();
    const sha3 = C.SHA3(C.enc.Hex.parse(str), {
        outputLength: 256
    });
    return sha3.toString();
}
