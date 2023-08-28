// add all the even and than the odd return the array
// SOLUTION 1. 

//SOLUTION 1 
// function evenOddSums(arr){
//     let addEven = []
//     let addOdd = []
//     let addOddSum = []
//     let addEvenSum = []
//     //check if elements are odd or even and store them into arrays 
//     arr.forEach(element => {
//         if (element %2 === 0 ){
//             addEven.push(element)
//         } else {
//             addOdd.push(element)
//         }
//     });
//     // function to add all elements in array with reduce method
//     let addAll = (arrAdd) => arrAdd.reduce((acc, cur) => acc + cur )
//     addEvenSum = addAll(addEven)
//     addOddSum = addAll(addOdd)
//     // concat in to empty array even and odd sums
//     return [].concat(addEvenSum, addOddSum)
// }
// console.log(evenOddSums([1,2,3,4,5,6,7,8]))
//SOLUTION 2

function addEvenOdd(arr){
    let evenSum = 0
    let oddSum = 0

    arr.forEach( num => (num % 2 === 0) ? evenSum += num : oddSum +=num)

    return [evenSum, oddSum];
}
console.log(addEvenOdd([1,2,3,4,5,6,7,8]))