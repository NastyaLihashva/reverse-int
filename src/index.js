module.exports = function reverse (n) {
    let result = Array.from(String(Math.abs(n))).reverse().join('');
    return Number(result);
}
