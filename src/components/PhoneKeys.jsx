/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import keyData from '../keyData.json';
import styles from './styles.scss';

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
  <button type="button" className={classnames([styles.phoneKey, 'btn btn-secondary w-100 m-1'])} disabled={disabled}>
    {letters && <div>{letters}</div>}
    <div>{number}</div>
  </button>
);

type rowProps = {
  keys: Array<Key>,
  last: boolean,
};

const PhoneRow = ({ keys, last }: rowProps) => (
  <div className={classnames([{ [styles.phoneRowLast]: last }, 'd-flex justify-content-between'])}>
    {keys.map(key => (
      <PhoneKey key={key.number} buttonKey={key} />
    ))}
  </div>
);

/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
type Props = {
  onButtonClick: string => void,
};

const PhoneKeys = ({  }: Props) => (
  <Fragment>
    <PhoneRow keys={keyData[0]} />
    <PhoneRow keys={keyData[1]} />
    <PhoneRow keys={keyData[2]} />
    <PhoneRow keys={keyData[3]} last />
  </Fragment>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default PhoneKeys;
