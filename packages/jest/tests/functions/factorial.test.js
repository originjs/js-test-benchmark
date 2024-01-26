import {factorial} from "../../../js-common/factorial.js";

describe('factorial test', () => {
    it('first factorial', () => {
        expect(factorial(3)).toEqual(6);
    })

    it('second factorial', () => {
        expect(factorial(5)).toEqual(120);
    })

    it('third factorial', () => {
        expect(factorial(20)).not.toEqual(20);
    })
})
