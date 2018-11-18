/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import UserInputContainer from './UserInputContainer';
import LetterResults from './LetterResults';

import ConverterProvider from '../context/ConverterProvider';
import ConverterContext from '../context/ConverterContext';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {};

type State = {
  userInput: string,
  results: Array<string>,
};

class ConverterContainer extends Component<Props, State> {
  render() {
    return (
      <ConverterProvider>
        <ConverterContext.Consumer>
          {({ results }) => (
            <div className="container">
              <UserInputContainer />
              <LetterResults results={results} />
            </div>
          )}
        </ConverterContext.Consumer>
      </ConverterProvider>
    );
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContainer;
