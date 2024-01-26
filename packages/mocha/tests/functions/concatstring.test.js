import {concatstring} from "../../../js-common/concatstring.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('concatstring test', () => {
    it('first concatstring', () => {
        expect(concatstring('hello', ' world')).equal('hello world');
    })

    it('second concatstring', () => {
        expect(concatstring('test', ' case')).equal('test case');
    })

    it('third concatstring', () => {
        expect(concatstring('test', ' case')).not.equal('1test case');
    })
})
