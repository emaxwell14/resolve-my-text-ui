/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
const ConverterContext = React.createContext({
  userInput: '',
  userInputError: undefined,
  results: [],
  queryResults: () => {},
  setUserInput: () => {},
  addKeyToUserInput: () => {},
});

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContext;
