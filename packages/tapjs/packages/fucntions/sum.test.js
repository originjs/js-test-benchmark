import {sum} from '../../../js-common/sum.js'
import t from 'tap'

t.test('No.1 sum', t => {
    t.equal(sum(1, 10, 100, 1000), 1111);
    t.end();
})

t.test('No.2 sum', t => {
    t.equal(sum(1, 5, 9, 20), 35);
    t.end();
})

t.test('No.3 sum', t => {
    t.not(sum(1, 56, 84, 88, 765, 164, 5), 100);
    t.end();
})

t.test('No.4 sum', t => {
    t.ok(sum(1, 5, 9, 20) === 35);
    t.end();
})

t.test('No.5 sum', t => {
    t.notOk(sum(1, 56, 84, 88, 765, 164, 5) === 100);
    t.end();
})
