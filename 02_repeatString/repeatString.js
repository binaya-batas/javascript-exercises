let string;
let num;
let result="";

const repeatString = function(string, num) {
    for (let i=0; i<num; i++) {
        result = result + string;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
