import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import test from 'ava'

test('first cutStrBeginAndEnd', t => {
    t.is(cutStrBeginAndEnd(' #test content!'), 'test content');
})

test('second cutStrBeginAndEnd', t => {
    t.is(cutStrBeginAndEnd('normal word'), 'ormal wor');
})

test('third cutStrBeginAndEnd', t => {
    t.not(cutStrBeginAndEnd('normal word'), 'ormal word');
})

