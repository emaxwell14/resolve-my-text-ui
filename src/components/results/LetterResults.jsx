/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */
import React, { Fragment } from 'react';
import classnames from 'classnames';
import InfiniteScroll from './InfiniteScroll';
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
 * Results display with loader
 */
const LetterResults = () => (
  <ConverterContext.Consumer>
    {({ results, resultsPending, clearResults }) => (
      <Fragment>
        {results.length > 0 && (
          <div className={classnames(['p-2', styles.borderShadow, styles.results])}>
            <div className={classnames(['d-flex justify-content-between', styles.resultHeader])}>
              <h4>Results</h4>
              <button type="button" className="btn btn-link p-0" onClick={clearResults}>
                Close Results
              </button>
            </div>
            <InfiniteScroll values={results} formatter={formatResults} count={50} />
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
