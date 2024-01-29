import {sub} from "../../../js-common/sub.js";
import test from 'ava'

test('No.1 sub', assert => {
    assert.is(sub(8, 1), 7);
})

test('No.2 sub', assert => {
    assert.is(sub(1, 6), -5);
})

test('No.3 sub', assert => {
    assert.not(sub(546, 156), 1);
})

test('No.4 sub', assert => {
    assert.true(sub(1, 6) === -5);
})

test('No.5 sub', assert => {
    assert.false(sub(546, 156) === 1);
})

