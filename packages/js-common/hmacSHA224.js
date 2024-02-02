import C from '@originjs/crypto-js-wasm';

export async function hmacSHA224(...strs) {
    let str1 = strs[0];
    let str2 = strs[1];
    await C.HmacSHA224.loadWasm();
    const sha224 = C.HmacSHA224(str1, str2).toString();
    return sha224;
}
