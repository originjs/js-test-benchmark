import {muti} from "../../../js-common/muti.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('muti test', () => {
    it('No.1 muti', () => {
        expect(muti(1, 2)).equal(2);
    })

    it('No.2 muti', () => {
        expect(muti(5 , 123)).equal(615);
    })

    it('No.3 muti', () => {
        expect(muti(156 , 489)).not.equal(1);
    })

    it('No.4 muti', () => {
        expect(muti(5, 123) === 615).true;
    })

    it('No.5 muti', () => {
        expect(muti(156, 489) === 1).false;
    })

})
