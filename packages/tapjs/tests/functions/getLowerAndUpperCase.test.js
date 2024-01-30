import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import t from 'tap'

t.test('No.1 getLowerAndUpperCase', t => {
    t.equal(getLowerAndUpperCase('test'), 'testTEST');
    t.end();
})

t.test('No.2 getLowerAndUpperCase', t => {
    t.equal(getLowerAndUpperCase('WORD'), 'wordWORD');
    t.end();
})

t.test('No.3 getLowerAndUpperCase', t => {
    t.not(getLowerAndUpperCase('case'), 'case');
    t.end();
})

t.test('No.4 getLowerAndUpperCase', t => {
    t.ok(getLowerAndUpperCase('WORD') === 'wordWORD');
    t.end();
})

t.test('No.5 getLowerAndUpperCase', t => {
    t.notOk(getLowerAndUpperCase('case') === 'case');
    t.end();
})

