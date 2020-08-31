/**
 * Instructions:
 * 
 * "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. 
 * Who doesn't like catching those one-off interesting mileage numbers? Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, 
 * and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).
 * It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), 
 * a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.
 * 
 * Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:
 *  Any digit followed by all zeros: 100, 90000
 *  Every digit is the same number: 1111
 *  The digits are sequential, incementing†: 1234
 *  The digits are sequential, decrementing‡: 4321
 *  The digits are a palindrome: 1221 or 73837
 *  The digits match one of the values in the awesomePhrases array
 * 
 * † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
 * ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.
 * 
 * @param {*} number - Given number. Will never be negative.
 * @param {*} awesomePhrases - Numbers that are considered "interesting" numbers.
 */

 // My solution.
function isInteresting(number, awesomePhrases) {
  // Isolate the first digit of "number" for use in checking for interesting numbers where every digit is the same number (e.g. 1111).
  var firstDigit = number;
  while (firstDigit >= 10) {
    firstDigit = Math.floor(firstDigit / 10);
  }
  
  // Create a regular expression that matches if "number" is equal to any of the "awesomePhrases" or starts with a non-zero digit and is followed by all zeroes (e.g. 100 or 90000).
  const phrasesRegex = new RegExp( '^' + awesomePhrases[0] + '$' + '|' + '^' + awesomePhrases[1] + '$' + '|^[1-9]0+$' )
  
  // Create a regular expression that matches if "number" has even one digit that is not the same number (e.g. 9998).
  const notSameDigitRegex = new RegExp( '[^' + firstDigit + ']' )
  
  // We only care about 3 digit numbers or greater, but still have to account for the "within the next two miles" requirement.
  if (number > 97) {
    // Use the regular expressions to search for matches. 
    if (phrasesRegex.test(number) || (notSameDigitRegex.test(number) == false && number >= 100)) {
      return 2;
    }
    // Use the regular expressions to search for matches that satisfy the "within the next two miles" requirement.
    for (var i = 1; i < 3; i++) {
      if (phrasesRegex.test(number+i) || notSameDigitRegex.test(number+i) == false) {
        return 1;
      }
    }
    
    // Use our helper functions to check if "number" meets the incrementing, decrementing, or palindrome requirement.
    if (isNumIncrementing(number) || isNumDecrementing(number) || isNumPalindrome(number)) {
      return 2;
    }
    if (isNumIncrementing(number+1) || isNumIncrementing(number+2) || isNumDecrementing(number+1) || isNumDecrementing(number+2) || isNumPalindrome(number+1) || isNumPalindrome(number+2)) {
      return 1;
    }
  }
  return 0;
}

// Returns true if "number" meets the incrementing requirement for "interesting" numbers. 
function isNumIncrementing(number) {
  var trueOrFalse = null;
  var numberString = number.toString();
  for (var x = 0; x < numberString.length-2; x++) {
    if ((parseInt(numberString[x])+1) != parseInt(numberString[x+1])) {
      return false;
    }
  }
  if (parseInt(numberString[numberString.length-1]) == 0 && parseInt(numberString[numberString.length-2]) == 9 && isNumIncrementing != false) {
    trueOrFalse = true;
  }
  else if (parseInt(numberString[numberString.length-2])+1 == parseInt(numberString[numberString.length-1]) && isNumIncrementing != false) {
    trueOrFalse = true;
  }
  else {
    trueOrFalse = false;
  }
  return trueOrFalse;
}

// Returns true if "number" meets the decrementing requirement for "interesting" numbers. 
function isNumDecrementing(number) {
  var numberString = number.toString();
  for (var x = 0; x < numberString.length-1; x++) {
    if ((parseInt(numberString[x]))-1 != parseInt(numberString[x+1])) {
      return false;
    }
  }
  return true;
}

// Returns true if "number" meets the palindrome requirement for "interesting" numbers. 
function isNumPalindrome(number) {
  var numberString = number.toString();
  if (numberString.length % 2 == 0) {
    let firstHalf = numberString.slice(0,(numberString.length / 2));
    let secondHalf = numberString.slice((numberString.length / 2), numberString.length);
    let reversedSecondHalf = secondHalf.split('').reverse().join('');
    if (firstHalf == reversedSecondHalf ) {
      return true;
    }
  }
  else {
    let firstHalf = numberString.slice(0, Math.floor(numberString.length / 2));
    let secondHalf = numberString.slice(Math.ceil(numberString.length / 2), numberString.length);
    let reversedSecondHalf = secondHalf.split('').reverse().join('');
    if (firstHalf == reversedSecondHalf ) {
      return true;
    }
  }
}

// Best practice/clever solution.
const isInteresting = (num, awesomePhrases) => {
    const tests = [
      n => /^\d0+$/.test(n),
      n => /^(\d)\1+$/.test(n),
      n => RegExp(n).test(1234567890),
      n => RegExp(n).test(9876543210),
      n =>
        `${n}` ===
        `${n}`
          .split('')
          .reverse()
          .join(''),
      n => awesomePhrases.includes(n),
    ];
  
    if (num > 99 && tests.some(test => test(num))) return 2;
  
    return (num > 98 && tests.some(test => test(num + 1))) ||
      (num > 97 && tests.some(test => test(num + 2)))
      ? 1
      : 0;
};