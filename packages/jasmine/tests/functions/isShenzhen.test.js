import {isShenzhen} from "../../../js-common/isShenzhen.js";

describe('isShenzhen test', () => {
    it('first isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).toBeTrue();
    })

    it('second isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toBeFalse();
    })

    it('third isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toBeTrue();
    })
})
