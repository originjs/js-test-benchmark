import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import test from 'tape'

test('No.1 cutStrBeginAndEnd', assert => {
    assert.is(cutStrBeginAndEnd(' #test content!'), 'test content');
    assert.end();
})

test('No.2 cutStrBeginAndEnd', assert => {
    assert.is(cutStrBeginAndEnd('normal word'), 'ormal wor');
    assert.end();
})

test('No.3 cutStrBeginAndEnd', assert => {
    assert.not(cutStrBeginAndEnd('normal word'), 'ormal word');
    assert.end();
})

test('No.4 cutStrBeginAndEnd', assert => {
    assert.true(cutStrBeginAndEnd('normal word') === 'ormal wor');
    assert.end();
})

test('No.5 cutStrBeginAndEnd', assert => {
    assert.false(cutStrBeginAndEnd('normal word') === 'ormal word');
    assert.end();
})

