import {sub} from "../../../js-common/sub.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('sub test', () => {
    it('first sub', () => {
        expect(sub(8, 1)).equal(7);
    })

    it('second sub', () => {
        expect(sub(1, 6)).equal(-5);
    })

    it('third sub', () => {
        expect(sub(546, 156)).not.equal('1');
    })
})
