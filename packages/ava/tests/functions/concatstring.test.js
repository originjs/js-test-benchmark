import {concatstring} from "../../../js-common/concatstring.js";
import test from 'ava'
test('first concatstring', t => {
    t.is(concatstring('hello', ' world'), 'hello world');
})

test('second concatstring', t => {
    t.is(concatstring('test', ' case'), 'test case');
})

test('third concatstring', t => {
    t.not(concatstring('test', ' case'), '1test case');
})

