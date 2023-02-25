/**
 * Fisher-Yates shuffle algorithm
 * @param {*[]} arr
 * @returns {*[]} 
 */
export function fisherYates(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const rndIndex = Math.random() * i | 0;
        [arr[i], arr[rndIndex]] = [arr[rndIndex], arr[i]]
    }
    return arr
}