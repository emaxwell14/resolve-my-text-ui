/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';
import classnames from 'classnames';
import PhoneKeys from './PhoneKeys';
import ConverterContext from '../../context/ConverterContext';
import styles from './styles.scss';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
/**
 * Holder for the text field, phone keys and submit button
 */
const UserInputContainer = () => (
  <ConverterContext.Consumer>
    {({ userInput, setUserInput, queryResults, userInputValidation, resultsPending }) => (
      <div className="d-flex flex-column align-items-center mb-3">
        <div className={classnames(['w-50 p-2', styles.borderShadow])}>
          <input
            className={classnames(['form-control', { [styles.error]: userInputValidation.error }])}
            type="text"
            placeholder="Please enter number"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          {userInputValidation && <span>{userInputValidation.error || userInputValidation.warning}</span>}
          <PhoneKeys />
          <button
            className="btn btn-primary w-100"
            type="button"
            onClick={queryResults}
            disabled={!userInput || userInputValidation.error || resultsPending}
          >
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
