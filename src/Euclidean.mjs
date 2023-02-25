/**
 * Euclidean algorithm
 * @param {number} ax 
 * @param {number} bx 
 * @returns {Object} 
 */
export function Euclidean(a, b) {
    let ax = a
    let bx = b
    if (ax < 1 || bx < 1) return -1
    while (b != 0) {
        [a, b] = [b, a % b]
    }
    const fraction = [ax / a, bx / a]
    return { MCD: a, fraction: fraction }
}