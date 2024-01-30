import {concatstring} from "../../../js-common/concatstring.js";
import t from 'tap'

t.test('concatstring No.1', t => {
    t.equal(concatstring('hello', ' world'), 'hello world');
    t.end();
})

t.test('concatstring No.2', t => {
    t.equal(concatstring('t.test', ' case'), 't.test case');
    t.end();
})

t.test('concatstring No.3', t => {
    t.not(concatstring('t.test', ' case'), '1t.test case');
    t.end();
})

t.test('concatstring No.4', t => {
    t.ok(concatstring('t.test', ' case') === 't.test case');
    t.end();
})

t.test('concatstring No.5', t => {
    t.notOk(concatstring('t.test', ' case') === '1t.test case');
    t.end();
})

