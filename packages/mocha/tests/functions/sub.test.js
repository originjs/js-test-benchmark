import {sub} from "../../../js-common/sub.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('sub test', () => {
    it('No.1 sub', () => {
        expect(sub(8, 1)).equal(7);
    })

    it('No.2 sub', () => {
        expect(sub(1, 6)).equal(-5);
    })

    it('No.3 sub', () => {
        expect(sub(546, 156)).not.equal('1');
    })

    it('No.4 sub', () => {
        expect(sub(1, 6) === -5).true;
    })

    it('No.5 sub', () => {
        expect(sub(546, 156) === 1).false;
    })

})
