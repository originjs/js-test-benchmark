import {concatstring} from "../../../js-common/concatstring.js";

QUnit.module('concatstring test');

QUnit.test('first concatstring', assert => {
    assert.equal(concatstring('hello', ' world'), 'hello world');
})

QUnit.test('second concatstring', assert => {
    assert.equal(concatstring('test', ' case'), 'test case');
})

QUnit.test('third concatstring', assert => {
    assert.notEqual(concatstring('test', ' case'), '1test case');
})

