import {sub} from "../../../js-common/sub.js";
import {describe, it, expect} from "vitest";

describe('sub test', () => {
    it('No.1 sub', () => {
        expect(sub(8, 1)).toEqual(7);
    })

    it('No.2 sub', () => {
        expect(sub(1, 6)).toEqual(-5);
    })

    it('No.3 sub', () => {
        expect(sub(546, 156)).not.toEqual('1');
    })

    it('No.4 sub', () => {
        expect(sub(1, 6) === -5).toBeTruthy();
    })

    it('No.5 sub', () => {
        expect(sub(546, 156) === 1).toBeFalsy();
    })

})
