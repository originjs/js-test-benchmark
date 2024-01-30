import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";

QUnit.module('getLowerAndUpperCase test');

QUnit.test('No.1 getLowerAndUpperCase', assert => {
    assert.equal(getLowerAndUpperCase('Test'), 'testTEST');
})

QUnit.test('No.2 getLowerAndUpperCase', assert => {
    assert.equal(getLowerAndUpperCase('WORD'), 'wordWORD');
})

QUnit.test('No.3 getLowerAndUpperCase', assert => {
    assert.notEqual(getLowerAndUpperCase('case'), 'case');
})


QUnit.test('No.4 getLowerAndUpperCase', assert => {
    assert.ok(getLowerAndUpperCase('WORD') === 'wordWORD');
})

QUnit.test('No.5 getLowerAndUpperCase', assert => {
    assert.notOk(getLowerAndUpperCase('case') === 'case');
})

