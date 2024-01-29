import {muti} from "../../../js-common/muti.js";

describe('muti test', () => {
    it('No.1 muti', () => {
        expect(muti(1, 2)).toEqual(2);
    })

    it('No.2 muti', () => {
        expect(muti(5 , 123)).toEqual(615);
    })

    it('No.3 muti', () => {
        expect(muti(156 , 489)).not.toEqual(1);
    })

    it('No.4 muti', () => {
        expect(muti(5, 123) === 615).toBeTruthy();
    })

    it('No.5 muti', () => {
        expect(muti(156, 489) === 1).toBeFalsy();
    })

})
