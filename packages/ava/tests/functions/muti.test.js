import {muti} from "../../../js-common/muti.js";
import test from 'ava'

test('No.1 muti', assert => {
    assert.is(muti(1, 2), 2);
})

test('No.2 muti', assert => {
    assert.is(muti(5, 123), 615);
})

test('No.3 muti', assert => {
    assert.not(muti(156, 489), 1);
})

test('No.4 muti', assert => {
    assert.true(muti(5, 123) === 615);
})

test('No.5 muti', assert => {
    assert.false(muti(156, 489) === 1);
})
