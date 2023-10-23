// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let objA = buildCharMap(stringA);
  let objB = buildCharMap(stringB);

  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let property in objA) {
    if (objA[property] !== objB[property]) {
      return false;
    }
  }

  return true;
}

//helper function
const buildCharMap = (string) => {
  const charMap = {};

  for (let char of string.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

module.exports = anagrams;
