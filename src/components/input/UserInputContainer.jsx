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
const UserInputContainer = () => (
  <ConverterContext.Consumer>
    {({ userInput, setUserInput, queryResults }) => (
      <div className="d-flex flex-column align-items-center mb-3">
        <div className={classnames(['w-50 p-2', styles.borderShadow])}>
          <input
            className="form-control"
            type="text"
            placeholder="Please enter number"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <PhoneKeys />
          <button className="btn btn-primary w-100" type="button" onClick={queryResults}>
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
