import {sub} from "../../../js-common/sub.js";
import {describe, it, expect} from "vitest";

describe('sub test', () => {
    it('first sub', () => {
        expect(sub(8, 1)).toEqual(7);
    })

    it('second sub', () => {
        expect(sub(1, 6)).toEqual(-5);
    })

    it('third sub', () => {
        expect(sub(546, 156)).not.toEqual('1');
    })
})
