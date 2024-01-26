import {isShenzhen} from "../../../js-common/isShenzhen.js";
import test from 'ava'

test('first isShenzhen', t => {
    t.true(isShenzhen('China GuangDong Shenzhen'));
})

test('second isShenzhen', t => {
    t.false(isShenzhen('China Zhejiang Hangzhou'));
})

test('third isShenzhen', t => {
    t.false(isShenzhen('US NewYork'));
})

