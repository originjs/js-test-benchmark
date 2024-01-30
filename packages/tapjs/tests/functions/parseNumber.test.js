import {parseNumber} from "../../../js-common/parseNumber.js";
import t from 'tap'

t.test('No.1 parseNumber', t => {
    t.equal(parseNumber('1'), 1);
    t.end();
})

t.test('No.2 parseNumber', t => {
    t.ok(isNaN(parseNumber('233as')));
    t.end();
})

t.test('No.3 parseNumber', t => {
    t.not(parseNumber(156, 489), 1);
    t.end();
})

t.test('No.4 parseNumber', t => {
    t.ok(isNaN(parseNumber('233as')) === true);
    t.end();
})

t.test('No.5 parseNumber', t => {
    t.notOk(parseNumber(156, 489) === 1);
    t.end();
})

