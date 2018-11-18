/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';
import PhoneKeys from './PhoneKeys';

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
  <div className="d-flex flex-column align-items-center">
    <div className="w-50">
      <input
        className="form-control"
        type="text"
        placeholder="Please enter number"
        value={userInput}
        onChange={e => setUserInput(e.target.value)}
      />
      <PhoneKeys getResults={getResults} />
      <button className="btn btn-primary w-100" type="button" onClick={getResults}>
        SUBMIT
      </button>
    </div>
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default UserInputContainer;
