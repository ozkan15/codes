/*Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example

For n = 152, the output should be
deleteDigit(n) = 52;
For n = 1001, the output should be
deleteDigit(n) = 101.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
10 ≤ n ≤ 106.

[output] integer

[JavaScript] Syntax Tips*/

function deleteDigit(n) {
    let digits = String(n).split("");
    let max = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < digits.length; i++){
        let arr = digits.slice();
        arr.splice(i,1);
        let num = Number(arr.join(""));
        if(num> max) max = num;
    }
    return max;
}
