import {sum} from '../../../js-common/sum.js'
import {sub} from "../../../js-common/sub.js";

QUnit.module('sum test');

QUnit.test('first sum', assert => {
    assert.equal(sum(1, 10, 100, 1000), 1111);
})

QUnit.test('second sum', assert => {
    assert.equal(sum(1, 5, 9, 20), 35);
})

QUnit.test('third sum', assert => {
    assert.notEqual(sum(1, 56, 84, 88, 765, 164, 5), 100);
})
