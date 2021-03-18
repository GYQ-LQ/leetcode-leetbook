/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function (text) {
  let len = 0,
    arr = text.split('')
  for (let i = 0; i < arr.length; i++) {
    const e = arr[i];
    if (e === ' ') {
      len++;
    }
  }

};
