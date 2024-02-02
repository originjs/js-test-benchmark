import C from '@originjs/crypto-js-wasm';

export async function algoSHA256(...strs) {
    let str = strs[0];
    await C.SHA256.loadWasm();
    let sha256 = new C.algo.SHA256();
    for (let i = 0; i < 100; i++) {
        sha256.update(str);
    }
    return sha256.finalize().toString();
}
