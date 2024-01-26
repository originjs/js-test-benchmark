import {sum} from '../../../js-common/sum.js'
import {describe, it} from "mocha";
import {expect} from "chai";

describe('sum test', () => {
    it('first sum', () => {
        expect(sum(1, 10, 100, 1000)).equal(1111);
    })

    it('second sum', () => {
        expect(sum(1, 5, 9, 20)).equal(35);
    })

    it('third sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5)).not.equal(100);
    })
})
