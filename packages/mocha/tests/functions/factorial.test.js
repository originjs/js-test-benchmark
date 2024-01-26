import {factorial} from "../../../js-common/factorial.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('factorial test', () => {
    it('first factorial', () => {
        expect(factorial(3)).equal(6);
    })

    it('second factorial', () => {
        expect(factorial(5)).equal(120);
    })

    it('third factorial', () => {
        expect(factorial(20)).not.equal(20);
    })
})
