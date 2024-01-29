import {add} from '../../../js-common/add.js'
import {describe, it} from "mocha";
import {expect} from "chai";

describe('add test', () => {
    it('add No.1', () => {
        expect(add(1, 2)).equal(3);
    })

    it('add No.2', () => {
        expect(add(123, 2)).equal(125);
    })

    it('add No.3', () => {
        expect(add(3, 4)).not.equal(8);
    });

    it('add No.4', () => {
        expect(add(3, 4) > 6).true;
    });

    it('add No.5', () => {
        expect(add(3, 2) > 6).false;
    });
})
