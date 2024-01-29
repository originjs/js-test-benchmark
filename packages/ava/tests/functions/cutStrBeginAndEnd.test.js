import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import test from 'ava'

test('No.1 cutStrBeginAndEnd', assert => {
    assert.is(cutStrBeginAndEnd(' #test content!'), 'test content');
})

test('No.2 cutStrBeginAndEnd', assert => {
    assert.is(cutStrBeginAndEnd('normal word'), 'ormal wor');
})

test('No.3 cutStrBeginAndEnd', assert => {
    assert.not(cutStrBeginAndEnd('normal word'), 'ormal word');
})

test('No.4 cutStrBeginAndEnd', assert => {
    assert.true(cutStrBeginAndEnd('normal word') === 'ormal wor');
})

test('No.5 cutStrBeginAndEnd', assert => {
    assert.false(cutStrBeginAndEnd('normal word') === 'ormal word');
})

