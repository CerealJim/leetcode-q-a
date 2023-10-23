// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charObject = {};

  for (let i = 0; i < str.length; i++) {
    if (!charObject[str[i]]) {
      charObject[str[i]] = 1;
    } else {
      charObject[str[i]] = charObject[str[i]] + 1;
    }
  }

  console.log(charObject, "object");

  let maxChar = "";
  let maxVal = 0;

  for (let key in charObject) {
    if (charObject[key] > maxVal) {
      maxVal = charObject[key];
      maxChar = key;
    }
  }

  console.log(maxChar, "maxChar");
  return maxChar;
}

module.exports = maxChar;
