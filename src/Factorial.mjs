/**
 * Factorial number algorithm
 * @param {number} n 
 * @returns {number}
 */
export function factorial(n) {
    let fact = 1
    while (n > 0) {
        fact *= n
        n--
    }
    return fact
}