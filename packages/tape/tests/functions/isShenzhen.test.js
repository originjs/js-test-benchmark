import {isShenzhen} from "../../../js-common/isShenzhen.js";
import test from 'tape'

test('No.1 isShenzhen', assert => {
    assert.true(isShenzhen('China GuangDong Shenzhen'));
    assert.end();
})

test('No.2 isShenzhen', assert => {
    assert.false(isShenzhen('China Zhejiang Hangzhou'));
    assert.end();
})

test('No.3 isShenzhen', assert => {
    assert.false(isShenzhen('US NewYork'));
    assert.end();
})

test('No.4 isShenzhen', assert => {
    assert.is(isShenzhen('China Zhejiang Hangzhou'), false);
    assert.end();
})

test('No.5 isShenzhen', assert => {
    assert.not(isShenzhen('US NewYork'), true);
    assert.end();
})

