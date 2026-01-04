// 2677. Chunk Array
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    hasil=[];
    for(i=0;i<arr.length; i+=size){
        hasil.push(arr.slice(i,i+size));
    }
    return hasil;
};
