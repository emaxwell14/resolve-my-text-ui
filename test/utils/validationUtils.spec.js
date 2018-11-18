import { assert } from 'chai';
import isValidNumber from '../../src/utils/validationUtils';

const INVALID_FORMAT_MSG = 'Invalid format. Use the active numbers on the keypad.';
const MAX_LENGTH_EXCEEDED_MSG = 'For performance reasons cannot exceed max length of 9.';

describe('Letter Util - Regex tests', () => {
  it('should return undefined for empty string', () => {
    assert.isUndefined(isValidNumber(''));
  });

  it('should return undefined for undefined', () => {
    assert.isUndefined(isValidNumber());
  });

  it('should return undefined for valid number string', () => {
    assert.isUndefined(isValidNumber('2'));
    assert.isUndefined(isValidNumber('6'));
    assert.isUndefined(isValidNumber('745458544'));
    assert.isUndefined(isValidNumber('234567890'));
  });

  it('should return error message for invalid number string', () => {
    assert.equal(isValidNumber('a'), INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('1'), INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('-'), INVALID_FORMAT_MSG);
    assert.equal(isValidNumber('3p0'), INVALID_FORMAT_MSG);
  });

  it('should return undefined message for number string at max length', () => {
    assert.isUndefined(isValidNumber('234567890'));
  });

  it('should return error message for number string exceeding max length', () => {
    assert.equal(isValidNumber('2345678902'), MAX_LENGTH_EXCEEDED_MSG);
  });
});
