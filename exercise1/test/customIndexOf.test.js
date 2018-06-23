var assert = require('assert');
Array.prototype.cIndexOf = require('../customIndexOf')

// global array with mock data
const a = ["a", "b", "c", "d", "e", "a", "b"];

describe('Array', function () {

  describe('cIndexOf() Method', function () {

    it('should return -1 when the value is not present', function () {
      // Find 'c' starting at 3
      assert.equal(a.cIndexOf('c', 3), -1);      
    });

    it('should throw an RangeError if index specified is greater than array length', (done) => {
      try {
        // Find 'a' at Array.length, causing an error
        a.cIndexOf('a', a.length);
        
        // Test fail if error is not thrown
        return done('RangeError expected to be thrown but there was no error')

      } catch (error) {

        if (error instanceof RangeError) // if we've got a RangeError, we're done
          done()
        else // if not, test fails
          done('Error was expected to be instance of RangeError, got ' + error.name)

      }
    });

    it('should return the first occurrence of the value specified', function () {
      // Find 'a'
      assert.equal(a.cIndexOf('a'), 0);
      // Find 'a' starting at 2
      assert.equal(a.cIndexOf('a', 2), 5);
    });

  });

});