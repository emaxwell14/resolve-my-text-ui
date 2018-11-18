/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import ConverterContext from '../../context/ConverterContext';
import styles from './styles.scss';

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const Loader = () => (
  <div className="d-flex justify-content-center">
    <div className={styles.loader} />
  </div>
);

const formatResults = results =>
  results.map(result => (
    <div key={result} className={classnames(['p-1', styles.result])}>
      {result}
    </div>
  ));
/* ******************************** */
/* ********** COMPONENT *********** */
/* ******************************** */
/**
 * Results display
 */
const LetterResults = () => (
  <ConverterContext.Consumer>
    {({ results, resultsPending }) => (
      <Fragment>
        {results.length > 0 && (
          <div className={classnames(['p-2', styles.borderShadow, styles.results])}>
            <h4>Results</h4>
            <div className="d-flex flex-wrap">{formatResults(results)}</div>
          </div>
        )}
        {resultsPending && <Loader />}
      </Fragment>
    )}
  </ConverterContext.Consumer>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default LetterResults;
