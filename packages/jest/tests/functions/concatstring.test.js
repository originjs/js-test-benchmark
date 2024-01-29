import {concatstring} from "../../../js-common/concatstring.js";

describe('concatstring test', () => {
    it('concatstring No.1', () => {
        expect(concatstring('hello', ' world')).toEqual('hello world');
    })

    it('concatstring No.2', () => {
        expect(concatstring('test', ' case')).toEqual('test case');
    })

    it('concatstring No.3', () => {
        expect(concatstring('test', ' case')).not.toEqual('1test case');
    })

    it('concatstring No.4', () => {
        expect(concatstring('test', ' case') === 'test case').toBeTruthy();
    })

    it('concatstring No.5', () => {
        expect(concatstring('test', ' case') === '1test case').toBeFalsy();
    })

})
