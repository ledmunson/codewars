/**
 * Instructions:
 * This time we want to write calculations using functions and get the results. Let's have a look at some examples:
 *  seven(times(five())); // must return 35
 *  four(plus(nine())); // must return 13
 *  eight(minus(three())); // must return 5
 *  six(dividedBy(two())); // must return 3
 * Requirements:
 *  There must be a function for each number from 0 ("zero") to 9 ("nine")
 *  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
 *  Each calculation consist of exactly one operation and two numbers=
 *  The most outer function represents the left operand, the most inner function represents the right operand
 *  Divison should be integer division. 
 */

// My solution using function composition.
// Each number function checks to see if it has been passed a function, if not then it just returns its corresponding number. 
// If it has been passed a function, then it calls that function and passes it its corresponding number.
function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };

// Each operator function takes an input digit as an argument. The input digit "b" is the left operand. The operator function 
// invokes another function which takes a digit "a" as an argument. "a" is the right operand. this internal function then performs
// the corresponding mathematical operation (i.e. plus, minus, multiply, divide) on the operands, and returns the result.
function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return Math.floor(a / b); }; };

// Best practice.
/* 
var n = function(digit) {
    return function(op) {
      return op ? op(digit) : digit;
    }
  };
  var zero = n(0);
  var one = n(1);
  var two = n(2);
  var three = n(3);
  var four = n(4);
  var five = n(5);
  var six = n(6);
  var seven = n(7);
  var eight = n(8);
  var nine = n(9);
  
  function plus(r) { return function(l) { return l + r; }; }
  function minus(r) { return function(l) { return l - r; }; }
  function times(r) { return function(l) { return l * r; }; }
  function dividedBy(r) { return function(l) { return l / r; }; }
  */