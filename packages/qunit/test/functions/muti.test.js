import {muti} from "../../../js-common/muti.js";

QUnit.module('muti test');

QUnit.test('first muti', assert => {
    assert.equal(muti(1, 2), 2);
})

QUnit.test('second muti', assert => {
    assert.equal(muti(5, 123), 615);
})

QUnit.test('third muti', assert => {
    assert.notEqual(muti(156, 489), 1);
})

