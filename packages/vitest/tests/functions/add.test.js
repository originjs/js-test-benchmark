import {add} from '../../../js-common/add.js'
import {describe, it, expect} from "vitest";

describe('add test', () => {
    it('add No.1', () => {
        expect(add(1, 2)).toEqual(3);
    })

    it('add No.2', () => {
        expect(add(123, 2)).toEqual(125);
    })

    it('add No.3', () => {
        expect(add(3, 4)).not.toEqual(8);
    });

    it('add No.4', () => {
        expect(add(3, 4) > 6).toBeTruthy();
    });

    it('add No.5', () => {
        expect(add(3, 2) > 6).toBeFalsy();
    });

    it('1', () => {

    });
})
