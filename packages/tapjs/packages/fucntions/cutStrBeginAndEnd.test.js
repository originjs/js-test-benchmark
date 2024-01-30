import {cutStrBeginAndEnd} from "../../../js-common/cutStrBeginAndEnd.js";
import t from 'tap'

t.test('No.1 cutStrBeginAndEnd', t => {
    t.equal(cutStrBeginAndEnd(' #t.test content!'), 't.test content');
    t.end();
})

t.test('No.2 cutStrBeginAndEnd', t => {
    t.equal(cutStrBeginAndEnd('normal word'), 'ormal wor');
    t.end();
})

t.test('No.3 cutStrBeginAndEnd', t => {
    t.not(cutStrBeginAndEnd('normal word'), 'ormal word');
    t.end();
})

t.test('No.4 cutStrBeginAndEnd', t => {
    t.ok(cutStrBeginAndEnd('normal word') === 'ormal wor');
    t.end();
})

t.test('No.5 cutStrBeginAndEnd', t => {
    t.notOk(cutStrBeginAndEnd('normal word') === 'ormal word');
    t.end();
})

