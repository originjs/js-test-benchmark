import {parseNumber} from "../../../js-common/parseNumber.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('parseNumber test', () => {
    it('first parseNumber', () => {
        expect(parseNumber('1')).equal(1);
    })

    it('second parseNumber', () => {
        expect(parseNumber('233as')).to.be.NaN;
    })

    it('third parseNumber', () => {
        expect(parseNumber('aa5358aa')).not.equal(5);
    })
})
