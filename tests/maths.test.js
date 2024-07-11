import Maths from '../exercises/maths.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The Maths class tests', function () {
  it('should contain PI property with number value 3.14', function () {
    assert.strictEqual(Maths.PI, 3.14)
  })
  it('should return the largest of two numbers', function () {
    assert.strictEqual(Maths.max(6, 4), 6)
    assert.strictEqual(Maths.max(2, 10), 10)
  })

  describe('Maths TDD - round', function () {
    // Arrange
    const testMath = new Maths()
    
    it('should return the same number when given a whole number', function () {
      // Act
      const wholeRoundNumber = testMath.round(6)
      // Assert
      assert.strictEqual(wholeRoundNumber, 6)
    })
    it('should return a rounded "down" number when the decimal part is less than 0.5', function () {
      // Act
      const roundDownNumber = testMath.round(6.1)
      // Assert
      assert.strictEqual(roundDownNumber, 6)
    })
    it('should return a rounded "up" number when the decimal part is greater than 0.5', function () {
      // Act
      const roundDownNumber = testMath.round(10.6)
      // Assert
      assert.strictEqual(roundDownNumber, 11)
    })
  })
})
