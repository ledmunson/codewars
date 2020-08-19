/**
 * Instructions:
 * Your task in this Kata is to emulate text justification in monospace font. You will be given a single-lined text and the expected justification width. 
 * The longest word will never be greater than this width.
 * 
 * Here are the rules:
 *  Use spaces to fill in the gaps between words.
 *  Each line should contain as many words as possible.
 *  Use '\n' to separate lines.
 *  Gap between words can't differ by more than one space.
 *  Lines should end with a word not a space.
 *  '\n' is not included in the length of a line.
 *  Large gaps go first, then smaller ones ('Lorem--ipsum--dolor--sit-amet,' (2, 2, 2, 1 spaces)).
 *  Last line should not be justified, use only one space between words.
 *  Last line should not contain '\n'
 *  Strings with one word do not need gaps ('somelongword\n').
 * 
 * @param {String} inputText - inital string
 * @param {Number} textLineLength - line length
 */ 

 // My solution.
 var justify = function(inputText, textLineLength) {
  
    // "strings" used to hold substrings of "str" for further processing.
    var strings = [];
    
    // "justifiedStrings" used to hold substrings with extra chars and spaces sliced off.
    var justifiedStrings = [];
    
    // Take "inputText" and keep slicing off the substrings that have been processed into usable form until only the last line is left.
    while (inputText.length > textLineLength) {
      // Slice a substring off of "str"
      var stringChunk = inputText.slice(0, textLineLength);    
      
      // Check to see if the element after the end of the substring in "str" is a whitespace. If yes, we assume that this substring is already in usable form.
      if (inputText[textLineLength] == " ") {
        strings.push(stringChunk);
        // slice off the substring from "inputText" to avoid having to keep track of an index variable.
        inputText = inputText.slice(textLineLength + 1);
      }
      // Substrings that end in the middle of a word are not considered usable and need to be sliced off at the end of the last complete word.
      else {
        var trimmedStringChunk = stringChunk.slice(0, stringChunk.lastIndexOf(" "));
        strings.push(trimmedStringChunk);
        // slice off the substring from "inputText" to avoid having to keep track of an index variable.
        inputText = inputText.slice(stringChunk.lastIndexOf(" ")+1);
      }
    }
    // This for loop checks the length of each substring and adds additional whitespaces, one by one, until the length matches "textLineLength."
    for (var x in strings) {
      // Initialize a counter variable "i." This is used to indicate how many consecutive whitespace characters to look for.
      var i = 1;
      while (strings[x].length < textLineLength) {
        // Construct a new regular expression that finds "i" number of whitespaces as long as those whitespaces are between an alphanumberic character, period, or comma and another alphanumeric character.
        var regex = new RegExp(`(?<=[\\w,.])\\s{${i}}(?=\\w)`)
        // This variable "blankSpace" is used to add whitespaces between words. 
        var blankSpace = " ".repeat(i+1);
        // Check if to see if the substring is made up of a single word. If so, exit out of this while loop.
        if (regex.test(strings[x]) == false) { break; }
        
        // Keep adding a whitespace between words until the end of the substring is reached or the substring is the proper length. 
        while (regex.test(strings[x])) {
          // if the substring being processed is still not long enough, then add in the additional white space.
          if (strings[x].length < textLineLength) {
            strings[x] = strings[x].replace(regex, blankSpace)
          }
          else { break; }
        }
        // If necessary, incrememnt "i" and start the top level "while" loop again.
        i++;
      }
      // Push the justified substring into "justifiedStrings" array.
      justifiedStrings.push(strings[x]);
      
    }
    
    // Add the last remaining substring to the answer and return it.  
    justifiedStrings.push(inputText);
    
    // Combine all of the processed/justified substrings into one long str with line breaks between substrings, and return as the answer.
    return justifiedStrings.join("\n");

  };

// Best practice (arguably) below.
/* 
function justify(str, len) {
    var words = str.split(' ');
    var lines = [];
    var lastLine = words.reduce(function(line, word) {
      if (line) {
        if (line.length + word.length + 1 <= len)
          return line + ' ' + word;
        lines.push(line);
      }
      return word;
    });
    lines = lines.map(function(line) {
      if (line.indexOf(' ') >= 0)
        for (var lineLen = line.length; lineLen < len; )
          line = line.replace(/ +/g, function(spaces) {
            return spaces + (lineLen++ < len ? ' ' : '');
          });
      return line;
    });
    lastLine && lines.push(lastLine);
    return lines.join('\n');
  }
  */