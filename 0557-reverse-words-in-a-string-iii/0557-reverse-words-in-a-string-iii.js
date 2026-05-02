/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return reversed = s 
    .split(" ")
    .map(word => word.split("").reverse().join(""))
    .join(" ")
};