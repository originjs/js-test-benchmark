import {isShenzhen} from "../../../js-common/isShenzhen.js";

describe('isShenzhen test', () => {
    it('No.1 isShenzhen', () => {
        expect(isShenzhen('China GuangDong Shenzhen')).toBeTrue();
    })

    it('No.2 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toBeFalse();
    })

    it('No.3 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toBeTrue();
    })

    it('No.4 isShenzhen', () => {
        expect(isShenzhen('China Zhejiang Hangzhou')).toEqual(false);
    })

    it('No.5 isShenzhen', () => {
        expect(isShenzhen('US NewYork')).not.toEqual(true);
    })

})
