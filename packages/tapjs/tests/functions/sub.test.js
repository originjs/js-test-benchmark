import {sub} from "../../../js-common/sub.js";
import t from 'tap'

t.test('No.1 sub', t => {
    t.equal(sub(8, 1), 7);
    t.end();
})

t.test('No.2 sub', t => {
    t.equal(sub(1, 6), -5);
    t.end();
})

t.test('No.3 sub', t => {
    t.not(sub(546, 156), 1);
    t.end();
})

t.test('No.4 sub', t => {
    t.ok(sub(1, 6) === -5);
    t.end();
})

t.test('No.5 sub', t => {
    t.notOk(sub(546, 156) === 1);
    t.end();
})

