import {sum} from '../../../js-common/sum.js'
import {describe, it} from "mocha";
import {expect} from "chai";

describe('sum test', () => {
    it('No.1 sum', () => {
        expect(sum(1, 10, 100, 1000)).equal(1111);
    })

    it('No.2 sum', () => {
        expect(sum(1, 5, 9, 20)).equal(35);
    })

    it('No.3 sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5)).not.equal(100);
    })

    it('No.4 sum', () => {
        expect(sum(1, 5, 9, 20) === 35).true;
    })

    it('No.5 sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5) === 100).false;
    })

})
