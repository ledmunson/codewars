# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
# Python
def move_zeros(array):
    tempArray1 = []
    tempArray2 = []
    for x in range(len(array)):
        if array[x] == 0.0 and array[x] is not False:
            array[x] = 0
    print(array)
    for z in array:    
        if z != 0 or z is False:
            tempArray1.append(z)
    for i in array:
        if i is 0:
            tempArray1.append(0)
    print(tempArray1)
    return tempArray1;
