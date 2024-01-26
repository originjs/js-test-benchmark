import {sum} from '../../../js-common/sum.js'
import {describe, it, expect} from "vitest";

describe('sum test', () => {
    it('first sum', () => {
        expect(sum(1, 10, 100, 1000)).toEqual(1111);
    })

    it('second sum', () => {
        expect(sum(1, 5, 9, 20)).toEqual(35);
    })

    it('third sum', () => {
        expect(sum(1, 56, 84, 88, 765, 164, 5)).not.toEqual(100);
    })
})
