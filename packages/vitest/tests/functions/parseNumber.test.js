import {parseNumber} from "../../../js-common/parseNumber.js";
import {describe, it, expect} from "vitest";

describe('parseNumber test', () => {
    it('No.1 parseNumber', () => {
        expect(parseNumber('1')).toEqual(1);
    })

    it('No.2 parseNumber', () => {
        expect(parseNumber('233as')).toBeNaN();
    })

    it('No.3 parseNumber', () => {
        expect(parseNumber('aa5358aa')).not.toEqual(5);
    })

    it('No.4 parseNumber', () => {
        expect(isNaN(parseNumber('233as')) === true).toBeTruthy();
    })

    it('No.5 parseNumber', () => {
        expect(parseNumber(156, 489) === 1).toBeFalsy();
    })

})
