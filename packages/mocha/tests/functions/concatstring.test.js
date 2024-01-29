import {concatstring} from "../../../js-common/concatstring.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('concatstring test', () => {
    it('concatstring No.1', () => {
        expect(concatstring('hello', ' world')).equal('hello world');
    })

    it('concatstring No.2', () => {
        expect(concatstring('test', ' case')).equal('test case');
    })

    it('concatstring No.3', () => {
        expect(concatstring('test', ' case')).not.equal('1test case');
    })

    it('concatstring No.4', () => {
        expect(concatstring('test', ' case') === 'test case').true;
    })

    it('concatstring No.5', () => {
        expect(concatstring('test', ' case') === '1test case').false;
    })

})
