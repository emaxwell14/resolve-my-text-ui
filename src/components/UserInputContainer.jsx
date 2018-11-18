/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';
import PhoneKeys from './PhoneKeys';
import ConverterContext from '../context/ConverterContext';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {
  getResults: () => void,
};

const UserInputContainer = ({ getResults }: Props) => (
  <ConverterContext.Consumer>
    {({ userInput, setUserInput }) => (
      <div className="d-flex flex-column align-items-center">
        <div className="w-50">
          <input
            className="form-control"
            type="text"
            placeholder="Please enter number"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <PhoneKeys />
          <button className="btn btn-primary w-100" type="button" onClick={getResults}>
            SUBMIT
          </button>
        </div>
      </div>
    )}
  </ConverterContext.Consumer>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default UserInputContainer;
