import {add} from '../../../js-common/add.js'

describe('add test', () => {
    it('first add', () => {
        expect(add(1, 2)).toEqual(3);
    })

    it('second add', () => {
        expect(add(123, 2)).toEqual(125);
    })

    it('third add', () => {
        expect(add(3, 4)).not.toEqual(8);
    });
})
