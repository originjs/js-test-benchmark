import {factorial} from "../../../js-common/factorial.js";
import t from 'tap'

t.test('No.1 factorial', t => {
    t.equal(factorial(3), 6);
    t.end();
})

t.test('No.2 factorial', t => {
    t.equal(factorial(5), 120);
    t.end();
})

t.test('No.3 factorial', t => {
    t.not(factorial(20), 20);
    t.end();
})

t.test('No.4 factorial', t => {
    t.ok(factorial(5) === 120);
    t.end();
})

t.test('No.5 factorial', t => {
    t.notOk(factorial(20) === 20);
    t.end();
})

