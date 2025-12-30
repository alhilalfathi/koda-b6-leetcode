// 2634. Filter Elements from Array
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function(arr, fn) {
//    return arr.filter(fn)
let filteredArr = []
    for(i=0; i<arr.length; i++){
        
        if( fn(arr[i],i) ){
            console.log(`true ${arr[i]}`)
            filteredArr.push(arr[i])
            
        }else {
            console.log(`false ${arr[i]}`)
        }
        // console.log(arr[i])
    }return filteredArr
    // console.log(fn())
};