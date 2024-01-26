import {sub} from "../../../js-common/sub.js";

QUnit.module('sub test');

QUnit.test('first sub', assert => {
    assert.equal(sub(8, 1), 7);
})

QUnit.test('second sub', assert => {
    assert.equal(sub(1, 6), -5);
})

QUnit.test('third sub', assert => {
    assert.notEqual(sub(546, 156), 1);
})

