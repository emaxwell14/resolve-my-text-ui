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
type Props = { results: Array<string> };

const LetterResults = ({ results }: Props) => (
  <div>
    <textarea className="form-control" rows="10" disabled value={results} />
  </div>
);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default LetterResults;
