/**
 * This function returns a integer representing the index where to split the given array, 
 * calculated by an algorithm: 
 * 
 * n1 = count of number parameter in the first segment of the array.
 * 
 * n2 = count of numbers that are != number parameter from the second segment of array.
 * 
 * n1 == n2: n1 and n2 must be equal.
 * 
 * @param number Integer
 * @param list_numbers Array of numbers
 * @returns Number
 */

const splitArray = (number, list_numbers) => {
  if (typeof (number) != 'number') {
    // If parameter is not a number, throw error
    throw new TypeError("'number' parameter must be of type number");
  } else {
    // Let's ensure we have an integer
    number = parseInt(number);
  }

  for (var splitIndex = 0; splitIndex < list_numbers.length; splitIndex++) {

    let numberCount = 0; // n1
    let otherNumberCount = 0; // n2

    for (let i = 0; i < list_numbers.length; i++) {

      if (splitIndex > i) {
        if (list_numbers[i] === number) {
          numberCount++;
        }
      } else {
        if (list_numbers[i] !== number) {
          otherNumberCount++;
        }
      }

    }

    if (numberCount == otherNumberCount) {
      return splitIndex;
    } else {
      numberCount = 0;
      otherNumberCount = 0;
    }

  }

  // Return 0 if split index was not found.
  return 0;
}


module.exports = splitArray;