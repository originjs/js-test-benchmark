import {factorial} from "../../../js-common/factorial.js";

QUnit.module('factorial test');

QUnit.test('No.1 factorial', assert => {
    assert.equal(factorial(3), 6);
})

QUnit.test('No.2 factorial', assert => {
    assert.equal(factorial(5), 120);
})

QUnit.test('No.3 factorial', assert => {
    assert.notEqual(factorial(20), 20);
})

QUnit.test('No.4 factorial', assert => {
    assert.ok(factorial(5) === 120);
})

QUnit.test('No.5 factorial', assert => {
    assert.notOk(factorial(20) === 20);
})

