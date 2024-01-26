import {add} from '../../../js-common/add.js'

QUnit.module('add test');

QUnit.test('first add', assert => {
    assert.equal(add(1, 2), 3);
})

QUnit.test('second add', assert => {
    assert.equal(add(123, 2), 125);
})

QUnit.test('third add', assert => {
    assert.notEqual(add(3, 4), 8);
})



