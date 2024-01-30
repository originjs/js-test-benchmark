import {isShenzhen} from "../../../js-common/isShenzhen.js";
import t from 'tap'

t.test('No.1 isShenzhen', t => {
    t.ok(isShenzhen('China GuangDong Shenzhen'));
    t.end();
})

t.test('No.2 isShenzhen', t => {
    t.notOk(isShenzhen('China Zhejiang Hangzhou'));
    t.end();
})

t.test('No.3 isShenzhen', t => {
    t.notOk(isShenzhen('US NewYork'));
    t.end();
})

t.test('No.4 isShenzhen', t => {
    t.equal(isShenzhen('China Zhejiang Hangzhou'), false);
    t.end();
})

t.test('No.5 isShenzhen', t => {
    t.not(isShenzhen('US NewYork'), true);
    t.end();
})

