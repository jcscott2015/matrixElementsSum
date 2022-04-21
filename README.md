# matrixElementsSum
My solution to CodeBots code challenge for matrixElementsSum.

After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

Help the bots calculate the total price of all the rooms that are suitable for them.

Example

For
```
matrix = [[0, 1, 1, 2],
          [0, 5, 0, 0],
          [2, 0, 3, 3]]
```
the output should be
matrixElementsSum(matrix) = 9.

```js
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
```

1. Parse matrix.
2. If a "room" is free or zero, store that column index in the *ignore* Set.
3. If column is not in the ignore set, add the current matrix value to *sum*.
4. Return *sum*.

Although the matrix elements are read only once, the time complexity for parsing the matrix is O(n<sup>2</sup>). Parsing the ignore set is likely O(n) for some of the nested loop. Therefore, O(n<sup>2</sup>)?
