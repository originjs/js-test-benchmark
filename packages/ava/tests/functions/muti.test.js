import {muti} from "../../../js-common/muti.js";
import test from 'ava'

test('first muti', t => {
    t.is(muti(1, 2), 2);
})

test('second muti', t => {
    t.is(muti(5, 123), 615);
})

test('third muti', t => {
    t.not(muti(156, 489), 1);
})

