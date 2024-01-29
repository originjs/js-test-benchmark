import {parseNumber} from "../../../js-common/parseNumber.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('parseNumber test', () => {
    it('No.1 parseNumber', () => {
        expect(parseNumber('1')).equal(1);
    })

    it('No.2 parseNumber', () => {
        expect(parseNumber('233as')).to.be.NaN;
    })

    it('No.3 parseNumber', () => {
        expect(parseNumber('aa5358aa')).not.equal(5);
    })

    it('No.4 parseNumber', () => {
        expect(isNaN(parseNumber('233as')) === true).true;
    })

    it('No.5 parseNumber', () => {
        expect(parseNumber(156, 489) === 1).false;
    })

})
