import {muti} from "../../../js-common/muti.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('muti test', () => {
    it('first muti', () => {
        expect(muti(1, 2)).equal(2);
    })

    it('second muti', () => {
        expect(muti(5 , 123)).equal(615);
    })

    it('third muti', () => {
        expect(muti(156 , 489)).not.equal(1);
    })
})
