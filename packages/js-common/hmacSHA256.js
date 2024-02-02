import C from '@originjs/crypto-js-wasm';

export async function hmacSHA256(...strs) {
    let str1 = strs[0];
    let str2 = strs[1];
    await C.HmacSHA256.loadWasm();
    const sha256 = C.HmacSHA256(str1, str2).toString();
    return sha256;
}
