import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import {concatstring} from "../../../js-common/concatstring.js";

QUnit.module('cutStrBeginAndEnd test');

QUnit.test('No.1 cutStrBeginAndEnd', assert => {
    assert.equal(cutStrBeginAndEnd(' #test content!'), 'test content');
})

QUnit.test('No.2 cutStrBeginAndEnd', assert => {
    assert.equal(cutStrBeginAndEnd('normal word'), 'ormal wor');
})

QUnit.test('No.3 cutStrBeginAndEnd', assert => {
    assert.notEqual(cutStrBeginAndEnd('normal word'), 'ormal word');
})

QUnit.test('No.4 cutStrBeginAndEnd', assert => {
    assert.ok(cutStrBeginAndEnd('normal word') === 'ormal wor');
})

QUnit.test('No.5 cutStrBeginAndEnd', assert => {
    assert.notOk(cutStrBeginAndEnd('normal word') === 'ormal word');
})

