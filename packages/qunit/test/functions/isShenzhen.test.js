import {isShenzhen} from "../../../js-common/isShenzhen.js";

QUnit.module('isShenzhen test');

QUnit.test('first isShenzhen', assert => {
    assert.ok(isShenzhen('China GuangDong Shenzhen'));
})

QUnit.test('second isShenzhen', assert => {
    assert.notOk(isShenzhen('China Zhejiang Hangzhou'));
})

QUnit.test('third isShenzhen', assert => {
    assert.notOk(isShenzhen('US NewYork'));
})

