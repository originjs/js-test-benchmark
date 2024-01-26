import {sum} from '../../../js-common/sum.js'
import test from 'ava'

test('first sum', t => {
    t.is(sum(1, 10, 100, 1000), 1111);
})

test('second sum', t => {
    t.is(sum(1, 5, 9, 20), 35);
})

test('third sum', t => {
    t.not(sum(1, 56, 84, 88, 765, 164, 5), 100);
})
