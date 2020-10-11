/*Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

Example

For

matrix = [[1, 2, 1],
          [2, 2, 2],
          [2, 2, 2],
          [1, 2, 3],
          [2, 2, 1]]
the output should be
differentSquares(matrix) = 6.

Here are all 6 different 2 × 2 squares:

1 2
2 2
2 1
2 2
2 2
2 2
2 2
1 2
2 2
2 3
2 3
2 1
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer matrix

Guaranteed constraints:
1 ≤ matrix.length ≤ 100,
1 ≤ matrix[i].length ≤ 100,
0 ≤ matrix[i][j] ≤ 9.

[output] integer

The number of different 2 × 2 squares in matrix.

[JavaScript] Syntax Tips
*/
function differentSquares(matrix) {
    let arr = {};
    let res = 0;
    for(let i = 0; i < matrix.length - 1; i++){
        for(let k = 0; k < matrix[0].length - 1; k++) {
            let x2 = "";
            for(let x = 0; x < 2; x++){
                let y2 = "";
                for(let y = 0; y < 2; y++){
                    y2 += matrix[i+x][k+y];
                }
                x2 += y2;
            }
            if(!arr[x2]){
                arr[x2] = 1;
                res++;
            } 
        }
    }
    
    return res;
}