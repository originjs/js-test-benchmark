import {isShenzhen} from "../../../js-common/isShenzhen.js";

QUnit.module('isShenzhen test');

QUnit.test('No.1 isShenzhen', assert => {
    assert.ok(isShenzhen('China GuangDong Shenzhen'));
})

QUnit.test('No.2 isShenzhen', assert => {
    assert.notOk(isShenzhen('China Zhejiang Hangzhou'));
})

QUnit.test('No.3 isShenzhen', assert => {
    assert.notOk(isShenzhen('US NewYork'));
})

QUnit.test('No.4 isShenzhen', assert => {
    assert.equal(isShenzhen('China Zhejiang Hangzhou'), false);
})

QUnit.test('No.5 isShenzhen', assert => {
    assert.notEqual(isShenzhen('US NewYork'), true);
})

