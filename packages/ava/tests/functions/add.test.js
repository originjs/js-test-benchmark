import {add} from '../../../js-common/add.js'
import test from 'ava'

test('add No.1', assert => {
    assert.is(add(1, 2), 3);
})

test('add No.2', assert => {
    assert.is(add(123, 2), 125);
})

test('add No.3', assert => {
    assert.not(add(3, 4), 8);
})

test('add No.4', assert => {
    assert.true(add(3, 4) > 6);
})

test('add No.5', assert => {
    assert.false(add(3, 2) > 6);
})



