import {muti} from "../../../js-common/muti.js";
import t from 'tap'

t.test('No.1 muti', t => {
    t.equal(muti(1, 2), 2);
    t.end();
})

t.test('No.2 muti', t => {
    t.equal(muti(5, 123), 615);
    t.end();
})

t.test('No.3 muti', t => {
    t.not(muti(156, 489), 1);
    t.end();
})

t.test('No.4 muti', t => {
    t.ok(muti(5, 123) === 615);
    t.end();
})

t.test('No.5 muti', t => {
    t.notOk(muti(156, 489) === 1);
    t.end();
})
