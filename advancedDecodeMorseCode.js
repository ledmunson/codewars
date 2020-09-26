/**
 * Instructions:
 * In this kata you have to write a Morse code decoder for wired electrical telegraph.
 * Electric telegraph is operated on a 2-wire line with a key that, when pressed, connects the wires together, which can be detected on a remote station.
 * The Morse code encodes every character being transmitted as a sequence of "dots" (short presses on the key) and "dashes" (long presses on the key).
 * 
 * When transmitting the Morse code, the international standard specifies that:
 * "Dot" – is 1 time unit long.
 * "Dash" – is 3 time units long.
 * Pause between dots and dashes in a character – is 1 time unit long.
 * Pause between characters inside a word – is 3 time units long.
 * Pause between words – is 7 time units long.
 * 
 * However, the standard does not specify how long that "time unit" is. And in fact different operators would transmit at different speed. 
 * An amateur person may need a few seconds to transmit a single character, a skilled professional can transmit 60 words per minute, and robotic transmitters may go way faster.
 * 
 * For this kata we assume the message receiving is performed automatically by the hardware that checks the line periodically, and if the line is connected (the key at the remote station is down), 1 is recorded, and if the line is not connected (remote key is up), 0 is recorded. After the message is fully received, it gets to you for decoding as a string containing only symbols 0 and 1.
 * For example, the message HEY JUDE, that is ···· · −·−−   ·−−− ··− −·· · may be received as follows:
 * 1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011
 * As you may see, this transmission is perfectly accurate according to the standard, and the hardware sampled the line exactly two times per "dot".
 * 
 * That said, your task is to implement two functions:
 * 1. Function decodeBits(bits), that should find out the transmission rate of the message, correctly decode the message to dots ., dashes - and spaces (one between characters, three between words)
 * and return those as a string. Note that some extra 0's may naturally occur at the beginning and the end of a message, make sure to ignore them.
 * Also if you have trouble discerning if the particular sequence of 1's is a dot or a dash, assume it's a dot.
 * 2. Function decodeMorse(morseCode), that would take the output of the previous function and return a human-readable string.
 * 
 * NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
 *  
 * @param {*} bits - input bits representing raw morse code transmission data.
 */

var decodeBits = function(bits){
  
    let sampleRate = 0;
    let tempArray = [];
    
    // Remove leading 0's from the transmitted message.
    let j = 0;
    while (bits[j] == '0') {
      bits = bits.slice(j+1);
    }
    
    // Remove trading 0's from the transmitted message.
    let k = bits.length - 1;
    while (bits[k] == '0') {
      bits = bits.slice(0, k);
      k--;
    }
    
    // Set the sample rate of the transmitted message
    if (bits.match(/(?<=1)0{7}(?=1)/)) {
      sampleRate = 1;
      console.log("sampleRate 1")
    }
    else if (bits.match(/(?<=1)0{14}(?=1)/) || bits.match(/^1100/) || bits.match(/^11111100/)) {
      sampleRate = 2;
      console.log("sampleRate 2")
    }
    else if ((bits.match(/(?<=1)0{21}(?=1)/)) || bits.match(/^111$/)) {
      sampleRate = 3;
      console.log("sampleRate 3")
    }
    else if (bits.match(/(?<=1)0{28}(?=1)/)) {
      sampleRate = 4;
      console.log("sampleRate 4")
    }
    else if (bits.match(/(?<=1)0{35}(?=1)/) || bits.match(/00000/)) {
      sampleRate = 5;
      console.log("sampleRate 5")
    }
    else if (bits.match(/^1111111$/)) {
      sampleRate = 7;
      console.log("sampleRate 7")
    }
    
    // If sample rate is higher than 1, remove the extra samples to create the equivalent of a transmitted message with a sample rate of 1.
    if (sampleRate > 1) {
      for (let i = 0; i < bits.length; i = i + sampleRate) {
        tempArray.push(bits[i]);
      }
      bits = tempArray.join('');
    }
    // Replace the bits with dashes, periods, and spaces to create morse code from the bits.
    bits = bits.replace(/111/g, '-').replace(/0000000/g, '  ').replace(/000/g, ' ').replace(/1/g, '.').replace(/0/g, '');
    return bits;
  }
  
  var decodeMorse = function(morseCode){
    console.log(morseCode)
    // Split the input into an array.
    morseCode = morseCode.split(' ');
    
    // Loops over the array to translate morse code into English letters.
    for (var x in morseCode) {
      if (morseCode[x] != '') {
        var translate = MORSE_CODE[morseCode[x]];
        morseCode[x] = translate;
      }
      
      // Retain spaces between words.
      else if (morseCode[x] == '') {
        morseCode[x] = ' ';
      }
    }
    
    // Combine the array back into a string.
    morseCode = morseCode.join('')
    return morseCode
  }