# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
# Note: If the number is a multiple of both 3 and 5, only count it once.
# Courtesy of projecteuler.net
# Python
def solution(number):
  x = 0 #x is used to store the sum
  while number > 2:
    number -= 1
    if (number % 3) == 0 or (number % 5) == 0:
      x += number
  return x;
