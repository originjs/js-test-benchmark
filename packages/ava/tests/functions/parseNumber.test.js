import {parseNumber} from "../../../js-common/parseNumber.js";
import test from 'ava'

test('No.1 parseNumber', assert => {
    assert.is(parseNumber('1'), 1);
})

test('No.2 parseNumber', assert => {
    assert.true(isNaN(parseNumber('233as')));
})

test('No.3 parseNumber', assert => {
    assert.not(parseNumber(156, 489), 1);
})

test('No.4 parseNumber', assert => {
    assert.true(isNaN(parseNumber('233as')) === true);
})

test('No.5 parseNumber', assert => {
    assert.false(parseNumber(156, 489) === 1);
})

