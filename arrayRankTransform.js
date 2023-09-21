/* Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 

Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.
Example 2:

Input: arr = [100,100,100]
Output: [1,1,1]
Explanation: Same elements share the same rank.
Example 3:

Input: arr = [37,12,28,9,100,56,80,5,12]
Output: [5,3,4,2,8,6,7,1,3] */

const arrayRankTransform = function (input) {
    let arr = [...input];
    let n = arr.length;
    let temp = 0;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp;
            }
        }
    }
    let rank = 1;
    let ranklist = [];
    for (let i = 0; i < n; i++) {
        if (input[j] === arr[i])
            if (i !== 0 || arr[i] !== arr[i - 1]) {
                rank++
            }
        ranklist[j] = rank;
    }
    return ranklist;
};

const arr = [20, 40, 60, 10, 30, 70, 5];
//const arr = [5, 10, 20, 20, 30, 40, 60, 70];
const arr2 = [100, 100, 100];
//const arr2 = [100, 100, 100];
const arr3 = [37, 12, 28, 9, 100, 56, 80, 5, 12];
//const arr3 = [5, 9, 12, 12, 28, 37, 56, 80, 100];

//arrayRankTransform(arr3)
console.log(arrayRankTransform(arr3));