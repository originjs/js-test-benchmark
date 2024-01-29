import {parseNumber} from "../../../js-common/parseNumber.js";
import {muti} from "../../../js-common/muti.js";

QUnit.module('parseNumber test');

QUnit.test('No.1 parseNumber', assert => {
    assert.equal(parseNumber('1'), 1);
})

QUnit.test('No.2 parseNumber', assert => {
    assert.ok(isNaN(parseNumber('233as')));
})

QUnit.test('No.3 parseNumber', assert => {
    assert.notEqual(parseNumber(156, 489), 1);
})

QUnit.test('No.4 parseNumber', assert => {
    assert.ok(isNaN(parseNumber('233as')) === true);
})

QUnit.test('No.5 parseNumber', assert => {
    assert.notOk(parseNumber(156, 489) === 1);
})

