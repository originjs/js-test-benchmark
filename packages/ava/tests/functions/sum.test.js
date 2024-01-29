import {sum} from '../../../js-common/sum.js'
import test from 'ava'

test('No.1 sum', assert => {
    assert.is(sum(1, 10, 100, 1000), 1111);
})

test('No.2 sum', assert => {
    assert.is(sum(1, 5, 9, 20), 35);
})

test('No.3 sum', assert => {
    assert.not(sum(1, 56, 84, 88, 765, 164, 5), 100);
})

test('No.4 sum', assert => {
    assert.true(sum(1, 5, 9, 20) === 35);
})

test('No.5 sum', assert => {
    assert.false(sum(1, 56, 84, 88, 765, 164, 5) === 100);
})
