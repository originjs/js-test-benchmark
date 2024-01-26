import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";

describe('getLowerAndUpperCase test', () => {
    it('first getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('Test')).toEqual('testTEST');
    })

    it('second getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('WORD')).toEqual('wordWORD');
    })

    it('third getLowerAndUpperCase', () => {
        expect(getLowerAndUpperCase('case')).not.toEqual('case');
    })
})
