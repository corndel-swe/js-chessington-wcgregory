import { Rectangle } from '../exercises/rectangles.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The Rectangle class tests', function () {
  // Arrange: You should create a new `Rectangle` with a known width and height.
  const testRectangle = new Rectangle(2, 4)

  it('should return the area of a rectangle using area()', function () {
		// Act: Call the `area` method on the `Rectangle`.
		const area = testRectangle.area()
		// Assert: Check that the result is the expected area.
    assert.strictEqual(area, 8)
  })
  it('should return the perimeter of a rectangle using area()', function () {
		// Act: Call the `perimeter` method on the `Rectangle`.
    const perimeter = testRectangle.perimeter()
		// Assert: Check whether the result is the expected perimeter.
    assert.strictEqual(perimeter, 12)
  })
})
