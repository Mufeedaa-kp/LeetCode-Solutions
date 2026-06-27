/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let binary = n.toString(2)
    let count  = 0

    for(let bit of binary){
        if(bit === "1"){
            count++
        }
    }
    return count
};