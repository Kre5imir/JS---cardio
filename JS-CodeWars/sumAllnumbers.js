function sumAll (num) {

    let sum = 0
    for (let i = 0; i <= num; i++){
        sum = num + i
    }
    return sum
}

console.log(sumAll(5))