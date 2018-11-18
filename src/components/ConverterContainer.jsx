/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';
import UserInputContainer from './input/UserInputContainer';
import LetterResults from './results/LetterResults';
/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
const ConverterContainer = () => (
  <div className="container my-3">
    <UserInputContainer />
    <LetterResults />
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContainer;
