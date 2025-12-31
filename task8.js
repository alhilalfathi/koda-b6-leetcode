// 2635. Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
 
var map = function(arr, fn) {
    let newArr = []
    for(i=0; i<arr.length; i++){
        // console.log(arr[i])
        newArr.push(fn(arr[i],i))
        // console.log(`newArr ${newArr}`)
    }
    
   return newArr
};