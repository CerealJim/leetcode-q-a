// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reverseVal = n.toString().split("").reverse().join("");

  return Math.sign(n) >= 0 ? parseInt(reverseVal) : parseInt(reverseVal) * -1;
}

module.exports = reverseInt;
