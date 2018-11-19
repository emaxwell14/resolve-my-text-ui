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
    .then(({ error, data }) => {
      if (error) {
        throw Error(`Server Error: ${error}`);
      }
      return data;
    });

/* ******************************** */
/* *********** EXPORTS ************ */
/* ******************************** */
export default computeLetters;
