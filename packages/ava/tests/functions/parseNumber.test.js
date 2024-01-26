import {parseNumber} from "../../../js-common/parseNumber.js";
import test from 'ava'

test('first parseNumber', t => {
    t.is(parseNumber('1'), 1);
})

test('second parseNumber', t => {
    t.true(isNaN(parseNumber('233as')));
})

test('third parseNumber', t => {
    t.not(parseNumber(156, 489), 1);
})

