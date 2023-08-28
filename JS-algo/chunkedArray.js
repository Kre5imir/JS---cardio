let arr = [1, 2, 3, 4 , 5, 6, 7, 8]

function chunkArray(arr, len) {
    //console.log(arr)
    
    const subArray = []
    // let i = 0

    // while (i < arr.length) {
    //     subArray.push(arr.slice(i, i + len))
    //     i += len;
    // }
    // return subArray

    //SECOND SOLUTION
    arr.forEach(element => { 
        last = subArray[subArray.length - 1]
        //console.log(last)
        // check if last and last length is equal to the chunk len
        if (!last || last.length === len){
            subArray.push([element])
        } else {
            last.push(element)
        }
        console.log(subArray)

    });
    return subArray;
}

console.log(chunkArray(arr, 3))
