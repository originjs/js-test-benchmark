import {isShenzhen} from "../../../js-common/isShenzhen.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('isShenzhen test', () => {
    it('first isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).true;
    })

    it('second isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).false;
    })

    it('third isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.true;
    })
})
