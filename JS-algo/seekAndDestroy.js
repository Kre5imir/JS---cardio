// Filter duplicates from arguments
// SOLUTION 1. -> methods: arguments, indexOf, filter
// function seekAndDestroy(arr){
    // return true if not in array
//     const args = Array.from(arguments)

//     function filterArr(arr){
//         return args.indexOf(arr) === -1
//     }
//     return arr.filter(filterArr)
// }

// SOLUTION 2 -> ...rest, filter, includes
function seekAndDestroy(arr, ...rest){
    return arr.filter(value => !rest.includes(value) )

}
console.log(seekAndDestroy([1,2,3, 'Hello'], 2,3, 'Hello'))