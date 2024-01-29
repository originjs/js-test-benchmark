import {factorial} from "../../../js-common/factorial.js";
import {describe, it, expect} from "vitest";

describe('factorial test', () => {
    it('No.1 factorial', () => {
        expect(factorial(3)).toEqual(6);
    })

    it('No.2 factorial', () => {
        expect(factorial(5)).toEqual(120);
    })

    it('No.3 factorial', () => {
        expect(factorial(20)).not.toEqual(20);
    })

    it('No.4 factorial', () => {
        expect(factorial(5) === 120).toBeTruthy();
    })

    it('No.5 factorial', () => {
        expect(factorial(20) === 20).toBeFalsy();
    })
})
