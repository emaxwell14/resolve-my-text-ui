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
    .then(res => {
      // Connection error
      if (res.status === 504) {
        throw Error('Error: Could not connect to API.');
      }
      return res.json();
    })
    .then(({ error, data }) => {
      // Validation error
      if (error) {
        throw Error(`Error: ${error}`);
      }
      return data;
    });

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default computeLetters;
