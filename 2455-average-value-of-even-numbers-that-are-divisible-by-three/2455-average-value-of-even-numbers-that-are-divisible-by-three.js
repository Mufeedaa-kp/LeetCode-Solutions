/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let add = 0
    let count = 0
    for(let num of nums){
    if(num % 2 === 0 && num % 3 === 0){
        add += num
        count++
    }
    }
    if(count === 0){
        return 0
    }
    return Math.floor(add/count)
};