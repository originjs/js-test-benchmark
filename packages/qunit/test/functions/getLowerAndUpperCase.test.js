import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";

QUnit.module('getLowerAndUpperCase test');

QUnit.test('first getLowerAndUpperCase', assert => {
    assert.equal(getLowerAndUpperCase('Test'), 'testTEST');
})

QUnit.test('second getLowerAndUpperCase', assert => {
    assert.equal(getLowerAndUpperCase('WORD'), 'wordWORD');
})

QUnit.test('third getLowerAndUpperCase', assert => {
    assert.notEqual(getLowerAndUpperCase('case'), 'case');
})

