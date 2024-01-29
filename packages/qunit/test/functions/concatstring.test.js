import {concatstring} from "../../../js-common/concatstring.js";

QUnit.module('concatstring test');

QUnit.test('concatstring No.1', assert => {
    assert.equal(concatstring('hello', ' world'), 'hello world');
})

QUnit.test('concatstring No.2', assert => {
    assert.equal(concatstring('test', ' case'), 'test case');
})

QUnit.test('concatstring No.3', assert => {
    assert.notEqual(concatstring('test', ' case'), '1test case');
})

QUnit.test('concatstring No.4', assert => {
    assert.ok(concatstring('test', ' case') === 'test case');
})

QUnit.test('concatstring No.5', assert => {
    assert.notOk(concatstring('test', ' case') === '1test case');
})


