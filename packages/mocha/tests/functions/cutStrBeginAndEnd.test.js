import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('cutStrBeginAndEnd test', () => {
    it('first cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd(' #test content!')).equal('test content');
    })

    it('second cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).equal('ormal wor');
    })

    it('third cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).not.equal('ormal word');
    })
})
