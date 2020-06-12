function strictEqual(num1, num2) {
  // eslint-disable-next-line no-cond-assign
  if (num1 = num2) {
    return true
  } else {
    return false
  }
}

module.exports = strictEqual
