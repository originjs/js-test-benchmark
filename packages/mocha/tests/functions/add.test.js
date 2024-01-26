import {add} from '../../../js-common/add.js'
import {describe, it} from "mocha";
import {expect} from "chai";

describe('add test', () => {
    it('first add', () => {
        expect(add(1, 2)).equal(3);
    })

    it('second add', () => {
        expect(add(123, 2)).equal(125);
    })

    it('third add', () => {
        expect(add(3, 4)).not.equal(8);
    });
})
