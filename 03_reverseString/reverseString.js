let string = "";
let revString = "";
let revArr = [];

const reverseString = function(string) {
    for (let i=0; i<string.length; i++) {
        revArr.push(string.charAt(i));
    }

    return revArr.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
