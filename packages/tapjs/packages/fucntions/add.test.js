import {add} from '../../../js-common/add.js'
import t from 'tap'

t.test('add No.1', t => {
    t.equal(add(1, 2), 3);
    t.end();
})

t.test('add No.2', t => {
    t.equal(add(123, 2), 125);
    t.end();
})

t.test('add No.3', t => {
    t.not(add(3, 4), 8);
    t.end();
})

t.test('add No.4', t => {
    t.ok(add(3, 4) > 6);
    t.end();
})

t.test('add No.5', t => {
    t.notOk(add(3, 2) > 6);
    t.end();
})



