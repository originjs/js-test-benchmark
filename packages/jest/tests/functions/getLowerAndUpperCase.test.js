import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";

describe('getLowerAndUpperCase test', () => {
    it('No.1 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('Test')).toEqual('testTEST');
    })

    it('No.2 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD')).toEqual('wordWORD');
    })

    it('No.3 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case')).not.toEqual('case');
    })

    it('No.4 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD') === 'wordWORD').toBeTruthy();
    })

    it('No.5 getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case') === 'case').toBeFalsy();
    })
})
