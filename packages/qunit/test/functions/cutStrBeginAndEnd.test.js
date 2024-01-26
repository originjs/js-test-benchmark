import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import {concatstring} from "../../../js-common/concatstring.js";

QUnit.module('cutStrBeginAndEnd test');

QUnit.test('first cutStrBeginAndEnd', assert => {
    assert.equal(cutStrBeginAndEnd(' #test content!'), 'test content');
})

QUnit.test('second cutStrBeginAndEnd', assert => {
    assert.equal(cutStrBeginAndEnd('normal word'), 'ormal wor');
})

QUnit.test('third cutStrBeginAndEnd', assert => {
    assert.notEqual(cutStrBeginAndEnd('normal word'), 'ormal word');
})

