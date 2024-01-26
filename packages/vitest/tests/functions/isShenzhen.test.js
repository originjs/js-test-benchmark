import {isShenzhen} from "../../../js-common/isShenzhen.js";
import {describe, it, expect} from "vitest";

describe('isShenzhen test', () => {
    it('first isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).toBeTruthy();
    })

    it('second isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toBeFalsy();
    })

    it('third isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toBeTruthy();
    })
})
