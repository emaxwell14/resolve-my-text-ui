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

class ConverterProvider extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userInput: '',
      userInputError: undefined,
      results: [],
      queryResults: this.queryResults,
      setUserInput: this.setUserInput,
      addKeyToUserInput: this.addKeyToUserInput,
    };
  }

  setUserInput = (userInput: string) => {
    const userInputError = isValidNumber(userInput);
    this.setState({ userInput, userInputError });
  };

  addKeyToUserInput = (pressedKey: string) => {
    const { userInput } = this.state;
    const updatedInput = userInput.concat(pressedKey);
    this.setState({ userInput: updatedInput });
  };

  queryResults = () => {
    const { userInput } = this.state;
    computeLetters(userInput)
      .then(results => this.setState({ results }))
      .catch(() => this.setState({ results: [] }));
  };

  render() {
    const { children } = this.props;
    return <ConverterContext.Provider value={this.state}>{children}</ConverterContext.Provider>;
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterProvider;
