// get avarage of the array by summing all numbers in array and devide it by length
let num = [1,2,3,4,5,5,6,7]

function getAverage(arr) {
    const count = arr.length;
    let num = 0
    for (let i = 0; i < count; i ++){
        num = num + arr[i] / count;
    }
    return Math.floor(num)
}

//console.log(getAverage(num))

//different way of getting average by using reduce function

function getAverage2(num){
    return Math.floor(num.reduce((sum, x) => sum + x) / num.length)
}

console.log(getAverage2(num))
