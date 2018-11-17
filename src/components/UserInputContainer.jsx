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
type Props = { userInput: string, setUserInput: (str: string) => void };

const UserInputContainer = ({ userInput, setUserInput }: Props) => (
  <div>
    <input type="text" placeholder="Please enter number" value={userInput} onChange={setUserInput} />
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default UserInputContainer;
