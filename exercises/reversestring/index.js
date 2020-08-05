// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // unshift: push at index 0
    const reversed = []
    str.split("").forEach((ele) => reversed.unshift(ele))
    return reversed.join("")
}

module.exports = reverse;
