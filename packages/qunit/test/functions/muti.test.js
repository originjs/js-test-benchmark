import {muti} from "../../../js-common/muti.js";

QUnit.module('muti test');

QUnit.test('No.1 muti', assert => {
    assert.equal(muti(1, 2), 2);
})

QUnit.test('No.2 muti', assert => {
    assert.equal(muti(5, 123), 615);
})

QUnit.test('No.3 muti', assert => {
    assert.notEqual(muti(156, 489), 1);
})

QUnit.test('No.4 muti', assert => {
    assert.ok(muti(5, 123) === 615);
})

QUnit.test('No.5 muti', assert => {
    assert.notOk(muti(156, 489) === 1);
})

