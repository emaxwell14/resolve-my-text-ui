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
  resultsPending: false,
  queryResults: () => {},
  setUserInput: () => {},
  addKeyToUserInput: () => {},
});

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContext;
