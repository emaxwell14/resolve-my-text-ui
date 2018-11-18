/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const MAX_STRING_LENGTH = 9;
const NUMBER_REGEX = '^[234567890]+$';

const INVALID_FORMAT_MSG = 'Invalid format. Use the active numbers on the keypad.';
const MAX_LENGTH_EXCEEDED_MSG = `For performance reasons cannot exceed max length of ${MAX_STRING_LENGTH}.`;

const isFormatValid = (numberString: string) => new RegExp(NUMBER_REGEX).test(numberString);
const exceedsMaxLength = (numberString: string) => numberString.length > MAX_STRING_LENGTH;

/* ******************************** */
/* *********** PUBLIC ************* */
/* ******************************** */

/**
 * Validate the input string.
 *  - If empty or undefined, no error. (As submit is disabled and dont want to show error)
 *  - If invalid format, returning error
 *  - Also checking length. API cannot currently handle large calculations and frontend is
 *    slow when displaying a large list.
 */
function isValidNumber(number?: string) {
  if (number) {
    if (!isFormatValid(number)) {
      return INVALID_FORMAT_MSG;
    }
    if (exceedsMaxLength(number)) {
      return MAX_LENGTH_EXCEEDED_MSG;
    }
  }
  return undefined;
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */

export default isValidNumber;
