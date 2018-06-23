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

const splitArray = (number, listNumbers) => {
  if (typeof (number) != 'number') {
    // If parameter is not a number, throw error
    throw new TypeError("'number' parameter must be of type number");
  } else {
    // Let's ensure we have an integer
    number = parseInt(number);
  }

  let numberPositions = [];

  // Find all number occurences in array and save its position
  for (let numberPosition = 0; numberPosition < listNumbers.length; numberPosition++) {
    if (listNumbers[numberPosition] === number) {
      numberPositions.push(numberPosition);
    }
  }

  // Check if we can split the array
  if (numberPositions[0] === (listNumbers.length - numberPositions.length)) {
    // Return 0 if we can't split
    return 0;
  } else {
    return listNumbers.length - numberPositions.length;
  }

}


module.exports = splitArray;