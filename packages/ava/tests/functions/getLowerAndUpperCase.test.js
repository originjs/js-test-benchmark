import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import test from 'ava'

test('No.1 getLowerAndUpperCase', assert => {
    assert.is(getLowerAndUpperCase('Test'), 'testTEST');
})

test('No.2 getLowerAndUpperCase', assert => {
    assert.is(getLowerAndUpperCase('WORD'), 'wordWORD');
})

test('No.3 getLowerAndUpperCase', assert => {
    assert.not(getLowerAndUpperCase('case'), 'case');
})

test('No.4 getLowerAndUpperCase', assert => {
    assert.true(getLowerAndUpperCase('WORD') === 'wordWORD');
})

test('No.5 getLowerAndUpperCase', assert => {
    assert.false(getLowerAndUpperCase('case') === 'case');
})

