import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('getLowerAndUpperCase test', () => {
    it('No.1 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('Test')).equal('testTEST');
    })

    it('No.2 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD')).equal('wordWORD');
    })

    it('No.3 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case')).not.equal('case');
    })

    it('No.4 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD') === 'wordWORD').true;
    })

    it('No.5 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case') === 'case').false;
    })
})
