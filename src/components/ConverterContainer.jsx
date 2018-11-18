/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import UserInputContainer from './UserInputContainer';
import LetterResults from './LetterResults';
import computeLetters from '../api';
import styles from './styles.scss';

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
  state = {
    userInput: '',
    results: [],
  };

  setUserInput = (userInput: string) => {
    this.setState({ userInput });
  };

  getResults = () => {
    const { userInput } = this.state;
    computeLetters(userInput).then(results => this.setState({ results }));
  };

  render() {
    const { userInput, results } = this.state;
    return (
      <div className={styles.container}>
        <UserInputContainer input={userInput} setUserInput={this.setUserInput} getResults={this.getResults} />
        <LetterResults results={results} />
      </div>
    );
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContainer;
