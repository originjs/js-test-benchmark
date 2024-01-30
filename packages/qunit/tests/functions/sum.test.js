import {sum} from '../../../js-common/sum.js'
import {sub} from "../../../js-common/sub.js";

QUnit.module('sum test');

QUnit.test('No.1 sum', assert => {
    assert.equal(sum(1, 10, 100, 1000), 1111);
})

QUnit.test('No.2 sum', assert => {
    assert.equal(sum(1, 5, 9, 20), 35);
})

QUnit.test('No.3 sum', assert => {
    assert.notEqual(sum(1, 56, 84, 88, 765, 164, 5), 100);
})

QUnit.test('No.4 sum', assert => {
    assert.ok(sum(1, 5, 9, 20) === 35);
})

QUnit.test('No.5 sum', assert => {
    assert.notOk(sum(1, 56, 84, 88, 765, 164, 5) === 100);
})
