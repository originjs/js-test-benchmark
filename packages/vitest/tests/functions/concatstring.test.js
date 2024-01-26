import {concatstring} from "../../../js-common/concatstring.js";
import {describe, it, expect} from "vitest";

describe('concatstring test', () => {
    it('first concatstring', () => {
        expect(concatstring('hello', ' world')).toEqual('hello world');
    })

    it('second concatstring', () => {
        expect(concatstring('test', ' case')).toEqual('test case');
    })

    it('third concatstring', () => {
        expect(concatstring('test', ' case')).not.toEqual('1test case');
    })
})
