const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../index')

describe('index', () => {
  describe('strictEqual', () => {
    it('returns the sum of the numbers in the array provided', () => {
      const nums = [1, 2, 3, 'c']

      const total = strictEqual('c', 'c')

      expect(total).to.equal(true)
    })
  })
})
