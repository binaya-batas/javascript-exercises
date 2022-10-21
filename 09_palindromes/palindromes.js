const palindromes = function (string) {
    var temp = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toUpperCase();
    var newWord = (string.split("").reverse().join("")).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toUpperCase();

    if (newWord === temp) {
        return true;
    } else {
        return false;
    }
};

console.log(palindromes("racecar!"))

// Do not edit below this line
module.exports = palindromes;
