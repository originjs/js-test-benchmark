import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('cutStrBeginAndEnd test', () => {
    it('No.1 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd(' #test content!')).equal('test content');
    })

    it('No.2 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).equal('ormal wor');
    })

    it('No.3 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).not.equal('ormal word');
    })


    it('No.4 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word') === 'ormal wor').true;
    })

    it('No.5 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word') === 'ormal word').false;
    })

})
