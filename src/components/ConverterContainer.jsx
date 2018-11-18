/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import UserInputContainer from './UserInputContainer';
import LetterResults from './LetterResults';
import computeLetters from '../api';
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
  // TODO how to access Context here
  getResults = () => {
    const { userInput } = this.state;
    computeLetters(userInput).then(results => console.log({ results }));
  };

  render() {
    return (
      <ConverterProvider>
        <ConverterContext.Consumer>
          {({ results }) => (
            <div className="container">
              <UserInputContainer getResults={this.getResults} />
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
