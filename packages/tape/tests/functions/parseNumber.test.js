import {parseNumber} from "../../../js-common/parseNumber.js";
import test from 'tape'

test('No.1 parseNumber', assert => {
    assert.is(parseNumber('1'), 1);
    assert.end();
})

test('No.2 parseNumber', assert => {
    assert.true(isNaN(parseNumber('233as')));
    assert.end();
})

test('No.3 parseNumber', assert => {
    assert.not(parseNumber(156, 489), 1);
    assert.end();
})

test('No.4 parseNumber', assert => {
    assert.true(isNaN(parseNumber('233as')) === true);
    assert.end();
})

test('No.5 parseNumber', assert => {
    assert.false(parseNumber(156, 489) === 1);
    assert.end();
})

