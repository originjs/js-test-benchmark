import {add} from '../../../js-common/add.js'

QUnit.module('add test');

QUnit.test('add No.1', assert => {
    assert.equal(add(1, 2), 3);
})

QUnit.test('add No.2', assert => {
    assert.equal(add(123, 2), 125);
})

QUnit.test('add No.3', assert => {
    assert.notEqual(add(3, 4), 8);
})

QUnit.test('add No.4', assert => {
    assert.ok(add(3, 4) > 6);
})

QUnit.test('add No.5', assert => {
    assert.notOk(add(3, 2) > 6);
})
