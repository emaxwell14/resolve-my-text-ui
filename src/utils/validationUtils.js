/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const MAX_STRING_LENGTH = 10;
const NUMBER_REGEX = '^[234567890]+$';

const INVALID_FORMAT_ERROR = 'Invalid format: Use the active numbers on the keypad only.';
const PERFORMANCE_WARNING = 'Warning: Large numbers may take a long time to process.';

const isFormatValid = (numberString: string) => new RegExp(NUMBER_REGEX).test(numberString);
const exceedsMaxLength = (numberString: string) => numberString.length > MAX_STRING_LENGTH;

/* ******************************** */
/* *********** PUBLIC ************* */
/* ******************************** */

/**
 * Validate the input string.
 *  - If empty or undefined, no error. (As submit is disabled and dont want to show error)
 *  - If invalid format, returning error
 *  - Also checking length and setting warning if very long
 */
function isValidNumber(number?: string) {
  const validation = {};
  if (number) {
    if (!isFormatValid(number)) {
      validation.error = INVALID_FORMAT_ERROR;
    }
    if (exceedsMaxLength(number)) {
      validation.warning = PERFORMANCE_WARNING;
    }
  }
  return validation;
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */

export default isValidNumber;
