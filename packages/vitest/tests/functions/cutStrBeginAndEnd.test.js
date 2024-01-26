import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import {describe, it, expect} from "vitest";

describe('cutStrBeginAndEnd test', () => {
    it('first cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd(' #test content!')).toEqual('test content');
    })

    it('second cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).toEqual('ormal wor');
    })

    it('third cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).not.toEqual('ormal word');
    })
})