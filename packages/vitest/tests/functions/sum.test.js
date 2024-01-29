import {sum} from '../../../js-common/sum.js'
import {describe, it, expect} from "vitest";

describe('sum test', () => {
    it('No.1 sum', () => {
        expect(sum(1, 10, 100, 1000)).toEqual(1111);
    })

    it('No.2 sum', () => {
        expect(sum(1, 5, 9, 20)).toEqual(35);
    })

    it('No.3 sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5)).not.toEqual(100);
    })

    it('No.4 sum', () => {
        expect(sum(1, 5, 9, 20) === 35).toBeTruthy();
    })

    it('No.5 sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5) === 100).toBeFalsy();
    })

})
