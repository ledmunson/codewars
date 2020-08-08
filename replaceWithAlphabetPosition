// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// Javascript
function alphabetPosition(text) {
    // first create an object to map values to letters
    var anum={
      a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
      l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
      u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }
    // now we format the string and split into substrings
    text = text.toLowerCase().split("");
    // create an empty array to hold our filtered array elements; only letters a-z are desired
    var temp = [];
    var j = 0; // created this variable as an index incrementer for the temp array 
    // now we filter the array for letters a-z and store in temp array, then convert each letter to its corresponding value
    for (var i = 0; i < text.length; i++) {
      if (text[i].match(/[a-z]/)) {
        temp.push(text[i]);
        temp[j] = anum[temp[j]].toString();
        j++;
      }
    } 
    // now we combine the substrings in the temp array into one string and return
    return temp.join(" ");
}