function strictEqual(num1, num2) {
    // eslint-disable-next-line no-cond-assign
    // eslint-disable-next-line eqeqeq
    if (num1 == num2 && typeof(num1) == typeof(num2)) {
        return false
    }
}

module.exports = strictEqual