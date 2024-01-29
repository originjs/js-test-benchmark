import {isShenzhen} from "../../../js-common/isShenzhen.js";
import test from 'ava'

test('No.1 isShenzhen', assert => {
    assert.true(isShenzhen('China GuangDong Shenzhen'));
})

test('No.2 isShenzhen', assert => {
    assert.false(isShenzhen('China Zhejiang Hangzhou'));
})

test('No.3 isShenzhen', assert => {
    assert.false(isShenzhen('US NewYork'));
})

test('No.4 isShenzhen', assert => {
    assert.is(isShenzhen('China Zhejiang Hangzhou'), false);
})

test('No.5 isShenzhen', assert => {
    assert.not(isShenzhen('US NewYork'), true);
})

