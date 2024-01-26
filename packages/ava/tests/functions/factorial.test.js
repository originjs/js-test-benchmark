import {factorial} from "../../../js-common/factorial.js";
import test from 'ava'

test('first factorial', t => {
    t.is(factorial(3), 6);
})

test('second factorial', t => {
    t.is(factorial(5), 120);
})

test('third factorial', t => {
    t.not(factorial(20), 20);
})

