let sum = 0;

const sumAll = function(a,b) {
    if (typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    for (let i=Math.min(a,b); i<=Math.max(a,b); i++) {
        sum = sum + i;
    }

    return sum;
};

console.log(sumAll(123,[1,2]))

// Do not edit below this line
module.exports = sumAll;
