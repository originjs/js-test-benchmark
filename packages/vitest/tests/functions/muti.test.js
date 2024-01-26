import {muti} from "../../../js-common/muti.js";
import {describe, it, expect} from "vitest";

describe('muti test', () => {
    it('first muti', () => {
        expect(muti(1, 2)).toEqual(2);
    })

    it('second muti', () => {
        expect(muti(5 , 123)).toEqual(615);
    })

    it('third muti', () => {
        expect(muti(156 , 489)).not.toEqual(1);
    })
})
