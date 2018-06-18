const cIndexOf = function (searchValue, fromIndex = 0) {

  // Throw error if index is higher than array length
  if (fromIndex > this.length - 1) {
    throw new RangeError("You can't start counting from that index. Array is shorter!");
  }

  for (i = fromIndex; i < this.length; i++) {
    if (this[i] === searchValue) {
      return i;
    }
  }

  return -1;

}

module.exports = cIndexOf;