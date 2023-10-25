// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let arr = str.split(" ");
  let newStr = "";

  for (let word of arr) {
    let letter = word.split("");
    let cap = letter[0].toUpperCase();

    letter.shift();
    letter.unshift(cap);

    newStr += letter.join("") + " ";
  }

  return newStr.trim();
}

module.exports = capitalize;
