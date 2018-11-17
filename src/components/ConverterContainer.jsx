/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Component } from 'react';
import UserInputContainer from './UserInputContainer';

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
    // results: [],
  };

  setUserInput = (userInput: string) => this.setState({ userInput });

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <UserInputContainer input={userInput} setUserInput={this.setUserInput} />
      </div>
    );
  }
}

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default ConverterContainer;
