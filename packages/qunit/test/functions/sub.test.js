import {sub} from "../../../js-common/sub.js";

QUnit.module('sub test');

QUnit.test('No.1 sub', assert => {
    assert.equal(sub(8, 1), 7);
})

QUnit.test('No.2 sub', assert => {
    assert.equal(sub(1, 6), -5);
})

QUnit.test('No.3 sub', assert => {
    assert.notEqual(sub(546, 156), 1);
})

QUnit.test('No.4 sub', assert => {
    assert.ok(sub(1, 6) === -5);
})

QUnit.test('No.5 sub', assert => {
    assert.notOk(sub(546, 156) === 1);
})

