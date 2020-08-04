# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other 
# and preserving the original order of elements.
# Python
def unique_in_order(iterable):
    result = []
    prev = None
    for char in iterable[0:]:
      if prev != char:
        result.append(char)
        prev = char
    return result;
