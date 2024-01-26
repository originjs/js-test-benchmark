import {sub} from "../../../js-common/sub.js";
import test from 'ava'

test('first sub', t => {
    t.is(sub(8, 1), 7);
})

test('second sub', t => {
    t.is(sub(1, 6), -5);
})

test('third sub', t => {
    t.not(sub(546, 156), 1);
})

