/**
 * Instructions:
 * Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. 
 * Multiple roman numeral values will be tested for each helper method.
 * Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
 * In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 
 * 2008 is written as 2000=MM, 8=VIII; or MMVIII. 
 * 1666 uses each Roman symbol in descending order: MDCLXVI.
 */

class RomanNumerals {
    
    // Used static methods because the codewars.com tests do not try to call a constructor.
    
    // Static method to convert a decimal number to roman numerals.
    static toRoman(num) {
      
      // Copy the input to a variable called "int."
      var int = num;
      
      // Initialize empty array to hold the roman numerals that will be used in the solution.
      var convert = [];
      
      // Initialize a dictionary for all combinations of roman numerals.
      var dictionary = { 
      "M": 1000,
      "CM": 900,
      "D": 500,
      "CD": 400,
      "C": 100,
      "XC": 90,
      "L": 50,
      "XL": 40,
      "X": 10,
      "IX": 9,
      "V": 5,
      "IV": 4,
      "I": 1
      }
      
      while (int) {
        // This for loop tries to find the largest base value from the dictionary in "int."
        for (var key in dictionary) {
          if (int / dictionary[key] >= 1) {
            // Add the corresponding roman numeral of the largest base value found in "int" to the "convert" array.
            convert.push(key);
            // Now, subtract the base value from "int." 
            int = int - dictionary[key];
            // Exit the for loop because we want to start over again from the top of the dictionary.
            break;
          }
        }
      }
      
      // Combine the "convert" array into a string and return as the solution.
      return convert.join("")
    }
    
    // Static method to convert roman numerals to a decimal number.
    static fromRoman(str) {
      
      // Initialize an empty array.
      var temp = []
      
      // Loop over each roman numeral of the input "str."
      for (var char of str) {
        // Add the corresponding decimal value of each roman numeral to the "temp" array.
        switch(char) {
            case "I":
              temp.push(1);
              break;
            case "V":
              temp.push(5);
              break;
            case "X":
              temp.push(10);
              break;
            case "L":
              temp.push(50);
              break;
            case "C":
              temp.push(100);
              break;
            case "D":
              temp.push(500);
              break;
            case "M":
              temp.push(1000);
              break;
            default:
              break;    
        }
      }
      
      // Check for subtractive cases, i.e. when a smaller roman numeral precedes a larger roman numeral.
      for (var i = 0; i < temp.length-1; i++) {
        if (temp[i] < temp[i+1]) {
          // Multiply the subtractive roman numeral by -2 and add it to the end of the "temp" array. This has the same effect as subtracting it.
          temp.push(temp[i] * -2) 
        } 
      }
      
      // Add up all the converted roman numerals in the "temp" array and return as the solution.
      return temp.reduce(function (total, num) {return total + num;})
    }
  }