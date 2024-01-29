import {add} from '../../../js-common/add.js'
import test from 'tape'

test('add No.1', assert => {
    assert.equal(add(1, 2), 3);
    assert.end();
});

test('add No.2', assert => {
    assert.equal(add(123, 2), 125);
    assert.end();
})

test('add No.3', assert => {
    assert.notEqual(add(3, 4), 8);
    assert.end();
})

test('add No.4', assert => {
    assert.true(add(3, 4) > 6);
    assert.end();
})

test('add No.5', assert => {
    assert.false(add(3, 2) > 6);
    assert.end();
})



