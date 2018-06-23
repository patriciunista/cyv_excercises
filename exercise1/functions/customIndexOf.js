/**
 * Custom implementation of the Array.indexOf() method.
 * @param searchValue Value to search in array
 * @param fromIndex Starting index.
 * @returns Number
 */
const cIndexOf = function (searchValue, fromIndex = 0) {

  // Throw error if index is higher than array length
  if (fromIndex > this.length - 1) {
    throw new RangeError("You can't start counting from that index. Array is shorter!");
  }

  // Find index
  for (i = fromIndex; i < this.length; i++) {
    if (this[i] === searchValue) {
      return i;
    }
  }

  // return -1 if index was not found
  return -1;

}

module.exports = cIndexOf;