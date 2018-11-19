/* eslint-disable react/no-unused-state */
/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import ConverterContext from './ConverterContext';
import computeLetters from '../api';
import isValidNumber from '../utils/validationUtils';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {
  children: React.Node,
};

/**
 * Wrapper for context provider. Contains the state of the app
 */
class ConverterProvider extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: '',
      userInputValidation: {},
      results: [],
      resultsPending: false,
      queryResults: this.queryResults,
      clearResults: this.clearResults,
      setUserInput: this.setUserInput,
      addKeyToUserInput: this.addKeyToUserInput,
    };
  }

  /**
   * Set user input. Client side validation handled here
   * Client side validation handled here.
   */
  setUserInput = (userInput: string) => {
    const userInputValidation = isValidNumber(userInput);
    this.setState({ userInput, userInputValidation });
  };

  /**
   * Add an individual key stroke to the input.
   * Client side validation handled here.
   */
  addKeyToUserInput = (pressedKey: string) => {
    const { userInput } = this.state;
    const updatedInput = userInput.concat(pressedKey);
    const userInputValidation = isValidNumber(updatedInput);
    this.setState({ userInput: updatedInput, userInputValidation });
  };

  /**
   * Query the api and store results
   */
  queryResults = () => {
    const { userInput } = this.state;
    computeLetters(userInput)
      .then(results => this.setState({ results, resultsPending: false }))
      .catch(({ message: error }) => {
        this.setState({ results: [], resultsPending: false, userInputValidation: { error } });
      });
    this.setState({ results: [], resultsPending: true });
  };

  /**
   * Clear stored results
   */
  clearResults = () => this.setState({ results: [] });

  render() {
    const { children } = this.props;
    return <ConverterContext.Provider value={this.state}>{children}</ConverterContext.Provider>;
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterProvider;
