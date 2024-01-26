import {parseNumber} from "../../../js-common/parseNumber.js";

describe('parseNumber test', () => {
    it('first parseNumber', () => {
        expect(parseNumber('1')).toEqual(1);
    })

    it('second parseNumber', () => {
        expect(parseNumber('233as')).toBeNaN();
    })

    it('third parseNumber', () => {
        expect(parseNumber('aa5358aa')).not.toEqual(5);
    })
})
