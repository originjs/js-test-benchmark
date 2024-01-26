import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('getLowerAndUpperCase test', () => {
    it('first getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('Test')).equal('testTEST');
    })

    it('second getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD')).equal('wordWORD');
    })

    it('third getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case')).not.equal('case');
    })
})
