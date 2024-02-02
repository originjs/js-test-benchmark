import C from '@originjs/crypto-js-wasm';

export async function algoSHA1(...strs) {
    let str = strs[0];
    await C.SHA1.loadWasm();
    const sha1 = new C.algo.SHA1();
    for (let i = 0; i < 100; i++) {
        sha1.update(str);
    }
    return sha1.finalize().toString();
}
