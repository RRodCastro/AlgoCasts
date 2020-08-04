// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // reduce (acc = [], curr), unshift: push at index 0
    
    const reversed = str.split("").reduce((acc, curr) => { acc.unshift(curr); return acc   }, [])
    return reversed.join("")
}

module.exports = reverse;
