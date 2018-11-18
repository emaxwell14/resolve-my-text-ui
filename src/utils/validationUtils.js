/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const NUMBER_REGEX = '^[234567890]+$';
const isFormatValid = number => new RegExp(NUMBER_REGEX).test(number);

/* ******************************** */
/* *********** PUBLIC ************* */
/* ******************************** */
const INVALID_FORMAT_MSG = 'Invalid format. Use the active numbers on the keypad.';

const isValidNumber = number => {
  if (number && !isFormatValid(number)) {
    return INVALID_FORMAT_MSG;
  }
};
/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */

export default isValidNumber;
