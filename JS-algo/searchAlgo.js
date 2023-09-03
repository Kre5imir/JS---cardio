
// LINEAR SEARCH O(n) if we have multiple elements push to array
// function linearSearch(arr, target){
//     const result = []
//     for ( let i = 0; i <= arr.length; i++){
//         if(target == arr[i]){
//             result.push(i)
//             // return i
//         }
//     } 
//     if (result.length === 0) {
//         return -1
//     } else {
//         return result
//     }

// }
// console.log(linearSearch([1,2,3,4,5,1,2,3], 3))

//BINARY SEARCH O(log n)
// function binarySearch(arr, target){
//     let start = 0
//     let end = arr.length - 1

//     while( start <= end) {
//         let middle = Math.floor((start + end) / 2)
//         console.log(middle + ' middle')
//         if (arr[middle] === target){
//             return middle
            
//         } else if ( arr[middle] < target) {
//             start = middle + 1
//             console.log(start + ' start')
//         } else {
//             end = middle - 1
//             console.log(end + ' end')
//         }

//     }
//     return -1
// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,11,12,13,14,15,22,33], 5))