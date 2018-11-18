import { assert } from 'chai';
import isValidNumber from '../../src/utils/validationUtils';

const INVALID_FORMAT_MSG = 'Invalid format: Use the active numbers on the keypad only.';
const MAX_LENGTH_EXCEEDED_MSG = 'Warning: Large numbers may take a long time to process.';

describe('Letter Util - Regex tests', () => {
  it('should return empty object for empty string', () => {
    assert.deepEqual({}, isValidNumber(''));
  });

  it('should return empty object for undefined', () => {
    assert.deepEqual({}, isValidNumber());
  });

  it('should return empty object for valid number string', () => {
    assert.deepEqual({}, isValidNumber('2'));
    assert.deepEqual({}, isValidNumber('6'));
    assert.deepEqual({}, isValidNumber('745458544'));
    assert.deepEqual({}, isValidNumber('234567890'));
  });

  it('should return error message for invalid number string', () => {
    assert.equal(isValidNumber('a').error, INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('1').error, INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('-').error, INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('3p0').error, INVALID_FORMAT_MSG);
    assert.isUndefined(isValidNumber('3p0').warning);
  });

  it('should return empty object for number string at max length', () => {
    assert.deepEqual({}, isValidNumber('9999999999'));
  });

  it('should return warning message for number string exceeding max length', () => {
    assert.equal(isValidNumber('99999999999').warning, MAX_LENGTH_EXCEEDED_MSG);
    assert.isUndefined(isValidNumber('99999999999').error);
  });
});
