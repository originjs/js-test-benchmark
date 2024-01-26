import {factorial} from "../../../js-common/factorial.js";

QUnit.module('factorial test');

QUnit.test('first factorial', assert => {
    assert.equal(factorial(3), 6);
})

QUnit.test('second factorial', assert => {
    assert.equal(factorial(5), 120);
})

QUnit.test('third factorial', assert => {
    assert.notEqual(factorial(20), 20);
})

