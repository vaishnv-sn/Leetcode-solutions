function simpleArraySum(ar) {
    // Write your code here
    let total = 0;
    for (let i = 0; i < ar.length; i++) {
        total = total + ar[i];
    }
    return total;
}

console.log(simpleArraySum([1, 2, 3, 4]));