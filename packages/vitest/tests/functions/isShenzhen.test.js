import {isShenzhen} from "../../../js-common/isShenzhen.js";
import {describe, it, expect} from "vitest";

describe('isShenzhen test', () => {
    it('No.1 isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).toBeTruthy();
    })

    it('No.2 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toBeFalsy();
    })

    it('No.3 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toBeTruthy();
    })

    it('No.4 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toEqual(false);
    })

    it('No.5 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toEqual(true);
    })

})
