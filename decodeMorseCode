/* In this kata you have to write a simple Morse code decoder. 
While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world. */
// Javascript
decodeMorse = function(morseCode){  
    var temp = [];
    var splitMorse = morseCode.split(" ");
    for (i=0;i<splitMorse.length;i++) {
      temp.push(MORSE_CODE[splitMorse[i]]);
      if (temp[i] == undefined) {
        temp[i] = " ";
      }
    }
    var solution = temp.join("");
    var solution = solution.split("  ").join(" ");
    return solution.trimLeft().trimRight();
}