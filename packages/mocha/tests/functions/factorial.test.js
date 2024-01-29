import {factorial} from "../../../js-common/factorial.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('factorial test', () => {
    it('No.1 factorial', () => {
        expect(factorial(3)).equal(6);
    })

    it('No.2 factorial', () => {
        expect(factorial(5)).equal(120);
    })

    it('No.3 factorial', () => {
        expect(factorial(20)).not.equal(20);
    })

    it('No.4 factorial', () => {
        expect(factorial(5) === 120).true;
    })

    it('No.5 factorial', () => {
        expect(factorial(20) === 20).false;
    })
})
