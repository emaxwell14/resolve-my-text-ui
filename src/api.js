/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const API_ENDPOINT = '/computeLetters';

/* ******************************** */
/* *********** PUBLIC* ************ */
/* ******************************** */

const computeLetters = number =>
  fetch(API_ENDPOINT, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ number }),
  })
    .then(res => res.json())
    .then(json => json.data);

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default computeLetters;
