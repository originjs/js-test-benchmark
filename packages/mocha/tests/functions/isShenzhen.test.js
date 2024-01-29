import {isShenzhen} from "../../../js-common/isShenzhen.js";
import {describe, it} from "mocha";
import {expect} from "chai";

describe('isShenzhen test', () => {
    it('No.1 isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).true;
    })

    it('No.2 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).false;
    })

    it('No.3 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.true;
    })

    it('No.4 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).equal(false);
    })

    it('No.5 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.equal(true);
    })

})
