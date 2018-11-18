/* eslint-disable react/no-unused-state */
/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import ConverterContext from './ConverterContext';

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
      results: [],
      setResults: this.setResults,
      setUserInput: this.setUserInput,
      addKeyToUserInput: this.addKeyToUserInput,
    };
  }

  setUserInput = (userInput: string) => {
    this.setState({ userInput });
  };

  addKeyToUserInput = (pressedKey: string) => {
    const { userInput } = this.state;
    const updatedInput = userInput.concat(pressedKey);
    this.setState({ userInput: updatedInput });
  };

  setResults = (results: Array<string>) => {
    this.setState({ results });
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
