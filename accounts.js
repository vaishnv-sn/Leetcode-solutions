
var maximumWealth = function (accounts) {
    let sums = [];
    for (let i = 0; i < accounts.length; i++) {
        let total = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            total += accounts[i][j]
        }
        sums.push(total);
    }
    let bigOne = 0;
    for (let k = 0; k < sums.length; k++) {
        if (sums[k] > bigOne) {
            bigOne = sums[k];
        }
    }
    return bigOne;
};

const arr = [[5, 4, 7], [8, 2, 3], [9, 4, 4]]
console.log(maximumWealth(arr));