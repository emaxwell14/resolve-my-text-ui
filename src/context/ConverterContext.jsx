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
  userInputValidation: {},
  results: [],
  resultsPending: false,
  queryResults: () => {},
  clearResults: () => {},
  setUserInput: () => {},
  addKeyToUserInput: () => {},
});

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContext;
