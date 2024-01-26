import {parseNumber} from "../../../js-common/parseNumber.js";
import {muti} from "../../../js-common/muti.js";

QUnit.module('parseNumber test');

QUnit.test('first parseNumber', assert => {
    assert.equal(parseNumber('1'), 1);
})

QUnit.test('second parseNumber', assert => {
    assert.ok(isNaN(parseNumber('233as')));
})

QUnit.test('third parseNumber', assert => {
    assert.notEqual(parseNumber(156, 489), 1);
})

