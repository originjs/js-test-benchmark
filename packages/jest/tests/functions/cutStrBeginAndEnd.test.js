import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";

describe('cutStrBeginAndEnd test', () => {
    it('No.1 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd(' #test content!')).toEqual('test content');
    })

    it('No.2 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).toEqual('ormal wor');
    })

    it('No.3 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word')).not.toEqual('ormal word');
    })

    it('No.4 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word') === 'ormal wor').toBeTruthy();
    })

    it('No.5 cutStrBeginAndEnd', () => {
        expect(cutStrBeginAndEnd('normal word') === 'ormal word').toBeFalsy();
    })

})
