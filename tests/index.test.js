const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../index')

describe('index', () => {
    describe('strictEqual', () => {
        it('returns the boolean result in the array provided', () => {
            const input = [1, 2, 3, 7, '5', '7']

            let result = strictEqual(input[3], input[5])

            expect(result).to.equal(false)
        })
    })
})