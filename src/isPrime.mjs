/**
 * Prime number algorithm
 * @param {number} n 
 * @returns {boolean}
 */
export function isPrime(n) {
    const num = n
    const div = []

    if (n < 1) return false
    while (n) {
        (num % n == 0) && div.push(n)
        n--
    }
    return div.length == 2 ? true : false
}