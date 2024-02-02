import C from '@originjs/crypto-js-wasm';

export async function hmacMD5(...strs) {
    let str = strs[0];
    await C.HmacMD5.loadWasm();
    const md5 = C.HmacMD5('Hi There', C.enc.Hex.parse(str)).toString();
    return md5;
}
