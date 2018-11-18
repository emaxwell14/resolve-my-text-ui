/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React from 'react';
import classnames from 'classnames';
import keyData from '../../keyData.json';
import styles from './styles.scss';
import ConverterContext from '../../context/ConverterContext';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */

type Key = {
  number: string,
  disabled: boolean,
  letters?: string,
};

type keyProp = {
  buttonKey: Key,
};

const PhoneKey = ({ buttonKey: { number, disabled, letters } }: keyProp) => (
  <ConverterContext.Consumer>
    {({ addKeyToUserInput }) => (
      <button
        type="button"
        className={classnames(['btn btn-secondary w-100 m-1', styles.phoneKey])}
        disabled={disabled}
        onClick={() => addKeyToUserInput(number)}
      >
        {letters && <div>{letters}</div>}
        <div>{number}</div>
      </button>
    )}
  </ConverterContext.Consumer>
);

type rowProps = {
  keys: Array<Key>,
  isLast: boolean,
};

const PhoneRow = ({ keys, isLast }: rowProps) => (
  <div className={classnames(['d-flex justify-content-between', { [styles.phoneRowLast]: isLast }])}>
    {keys.map(key => (
      <PhoneKey key={key.number} buttonKey={key} />
    ))}
  </div>
);

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
const PhoneKeys = () => (
  <div className="my-2">
    <PhoneRow keys={keyData[0]} />
    <PhoneRow keys={keyData[1]} />
    <PhoneRow keys={keyData[2]} />
    <PhoneRow keys={keyData[3]} isLast />
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default PhoneKeys;
