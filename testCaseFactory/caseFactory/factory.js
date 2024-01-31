const ava = require('./avaCaseFactory')
const jasmine = require('./jasmineCaseFactory')
const jest = require('./jestCaseFactory')
const mocha = require('./mochaCaseFactory')
const qunit = require('./qunitCaseFactory')
const tape = require('./tapeCaseFactory')
const tapjs = require('./tapjsCaseFactory')
const vitest = require('./vitestCaseFactory')

exports.ava = ava.avaCaseFactory;
exports.jasmine = jasmine.jasmineCaseFactory;
exports.jest = jest.jestCaseFactory;
exports.mocha = mocha.mochaCaseFactory;
exports.qunit = qunit.qunitCaseFactory;
exports.tape = tape.tapeCaseFactory;
exports.tapjs = tapjs.tapjsCaseFactory;
exports.vitest = vitest.vitestCaseFactory;
