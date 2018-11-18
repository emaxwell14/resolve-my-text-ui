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
type Props = {
  userInput: string,
  setUserInput: (str: string) => void,
  getResults: () => void,
};

const UserInputContainer = ({ userInput, setUserInput, getResults }: Props) => (
  <div>
    <input
      type="text"
      placeholder="Please enter number"
      value={userInput}
      onChange={e => setUserInput(e.target.value)}
    />
    <button type="button" onClick={getResults}>
      SUBMIT
    </button>
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default UserInputContainer;
