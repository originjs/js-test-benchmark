import {factorial} from "../../../js-common/factorial.js";
import test from 'tape'

test('No.1 factorial', assert => {
    assert.is(factorial(3), 6);
    assert.end();
})

test('No.2 factorial', assert => {
    assert.is(factorial(5), 120);
    assert.end();
})

test('No.3 factorial', assert => {
    assert.not(factorial(20), 20);
    assert.end();
})

test('No.4 factorial', assert => {
    assert.true(factorial(5) === 120);
    assert.end();
})

test('No.5 factorial', assert => {
    assert.false(factorial(20) === 20);
    assert.end();
})

