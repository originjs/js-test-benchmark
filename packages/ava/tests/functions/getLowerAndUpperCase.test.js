import {getLowerAndUpperCase} from "../../../js-common/getLowerAndUpperCase.js";
import test from 'ava'

test('first getLowerAndUpperCase', t => {
    t.is(getLowerAndUpperCase('Test'), 'testTEST');
})

test('second getLowerAndUpperCase', t => {
    t.is(getLowerAndUpperCase('WORD'), 'wordWORD');
})

test('third getLowerAndUpperCase', t => {
    t.not(getLowerAndUpperCase('case'), 'case');
})

