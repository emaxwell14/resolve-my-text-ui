/* ******************************** */
/* *********** IMPORTS ************ */
/* ******************************** */

/* ******************************** */
/* *********** PRIVATE ************ */
/* ******************************** */
const API_URL = 'http://localhost:8080/computeLetters';

/* ******************************** */
/* *********** PUBLIC* ************ */
/* ******************************** */

const computeLetters = number =>
  fetch(API_URL, {
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
