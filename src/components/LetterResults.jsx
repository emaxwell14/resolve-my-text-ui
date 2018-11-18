/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import ConverterContext from '../context/ConverterContext';
import styles from './styles.scss';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const formatResults = results =>
  results.map(result => (
    <div key={result} className={classnames(['p-1', styles.result])}>
      {result}
    </div>
  ));
/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
const LetterResults = () => (
  <ConverterContext.Consumer>
    {({ results }) => (
      <Fragment>
        {results.length > 0 && (
          <div className={classnames(['p-2', styles.borderShadow, styles.results])}>
            <h4>Results</h4>
            <div className="d-flex flex-wrap">{formatResults(results)}</div>
          </div>
        )}
      </Fragment>
    )}
  </ConverterContext.Consumer>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default LetterResults;
