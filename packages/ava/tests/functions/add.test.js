import {add} from '../../../js-common/add.js'
import test from 'ava'

test('first add', t => {
    t.is(add(1, 2), 3);
})

test('second add', t => {
    t.is(add(123, 2), 125);
})

test('third add', t => {
    t.not(add(3, 4), 8);
})



