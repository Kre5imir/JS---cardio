let arr = [[1,2],[3,4],[5,6],[7]]

function flatArray(arr){
    // SOLUTION 1 uses reduce
    // return arr.reduce((x, y) => x.concat(y))
    
    //SOLUTION 2 uses concat and apply
    //return [].concat.apply([], arr)

    //SOLUTION 3 uses spread operator
    //return [].concat(...arr)
}

console.log(flatArray(arr))