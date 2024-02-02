import C from '@originjs/crypto-js-wasm';

export async function algoSHA384(...strs) {
    let str = strs[0];
    await C.SHA384.loadWasm();
    const sha384 = new C.algo.SHA384();
    for (let i = 0; i < 100; i++) {
        sha384.update(str);
    }
    return sha384.finalize().toString();
}
