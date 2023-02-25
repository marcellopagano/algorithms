/**
 * Fibonacci algorithm
 * @param {number} n 
 * @returns {number[]}
*/
export function fibonacci(n) {
    const f = [0, 1]
    const fSeq = []

    while (fSeq.length < n) {
        f[1] = f[0] + f[1];          // [0,1] [1,1] [1,2] [2,3] [3,5] [5,8]
        [f[0], f[1]] = [f[1], f[0]]  // [1,0] [1,1] [2,1] [3,2] [5,3] [8,5]
        fSeq.push(f[1])
    }
    return fSeq
}