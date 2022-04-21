/**
 * Help the bots calculate the total price of all the rooms that are suitable for them.
 * @param {number[][]} matrix
 * @returns number
 */
function matrixElementsSum(matrix) {
  const ignore = new Set();
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) { // row / floor
    for (let j = 0; j < matrix[0].length; j++) { // column / stack
      if (matrix[i][j] === 0) {
        ignore.add(j);
      } else if (!ignore.has(j)) {
        sum += matrix[i][j];
      }
    }
  }
  return sum;
}

const matrix = [
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3]
];

console.info(matrixElementsSum(matrix)); // 9
