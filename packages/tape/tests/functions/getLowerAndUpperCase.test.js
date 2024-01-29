import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import test from 'tape'

test('No.1 getLowerAndUpperCase', assert => {
    assert.is(getLowerAndUpperCase('Test'), 'testTEST');
    assert.end();
})

test('No.2 getLowerAndUpperCase', assert => {
    assert.is(getLowerAndUpperCase('WORD'), 'wordWORD');
    assert.end();
})

test('No.3 getLowerAndUpperCase', assert => {
    assert.not(getLowerAndUpperCase('case'), 'case');
    assert.end();
})

test('No.4 getLowerAndUpperCase', assert => {
    assert.true(getLowerAndUpperCase('WORD') === 'wordWORD');
    assert.end();
})

test('No.5 getLowerAndUpperCase', assert => {
    assert.false(getLowerAndUpperCase('case') === 'case');
    assert.end();
})

