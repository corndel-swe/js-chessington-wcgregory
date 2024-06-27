import Maths from '../exercises/maths.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The Maths class set of tests', function () {
  it('should contain PI property with number value 3.14', function () {
    const testPI = new Maths()
    assert.strictEqual(Maths.PI, 3.14)
  })
  it('should return the largest of two numbers', function () {
    const testMax = new Maths()
    assert.strictEqual(Maths.max(6, 4), 6)
    assert.strictEqual(Maths.max(2, 10), 10)
  })
})
