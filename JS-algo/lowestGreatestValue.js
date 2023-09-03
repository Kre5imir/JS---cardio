//return secondValue seond lowest and second greatest 

function secondValue(arr){
    let values = [...new Set(arr)].sort((a,b) => a - b)
    if (values.length < 2){
        return `${values[0]}`
    }
    else if (values.length === 2 ){
        return `${values[0]} ${values[1]}`
    }
    else {
        return `${values[1]} ${values[values.length - 2]}`
    }
}
console.log(secondValue([1,3,5,7,23,22,11,-1]));

