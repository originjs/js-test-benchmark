import {concatstring} from "../../../js-common/concatstring.js";
import test from 'ava'

test('concatstring No.1', assert => {
    assert.is(concatstring('hello', ' world'), 'hello world');
})

test('concatstring No.2', assert => {
    assert.is(concatstring('test', ' case'), 'test case');
})

test('concatstring No.3', assert => {
    assert.not(concatstring('test', ' case'), '1test case');
})

test('concatstring No.4', assert => {
    assert.true(concatstring('test', ' case') === 'test case');
})

test('concatstring No.5', assert => {
    assert.false(concatstring('test', ' case') === '1test case');
})

