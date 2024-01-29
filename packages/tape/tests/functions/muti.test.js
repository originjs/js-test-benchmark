import {muti} from "../../../js-common/muti.js";
import test from 'tape'

test('No.1 muti', assert => {
    assert.is(muti(1, 2), 2);
    assert.end();
})

test('No.2 muti', assert => {
    assert.is(muti(5, 123), 615);
    assert.end();
})

test('No.3 muti', assert => {
    assert.not(muti(156, 489), 1);
    assert.end();
})

test('No.4 muti', assert => {
    assert.true(muti(5, 123) === 615);
    assert.end();
})

test('No.5 muti', assert => {
    assert.false(muti(156, 489) === 1);
    assert.end();
})
