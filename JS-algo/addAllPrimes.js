// prime number is a whole number whose factors are only 1 and itself
// test 10 = 17

function sumAllPrimes(num){

    let total = 0;
    //check if number is prime 
    const checkForPrime = (i) => {
        for (let j = 2; j < i; j++){
            if (i % j === 0){
                return false
            }
        }
        return true
    }
    for (let i = 2; i <= num; i++){
        if(checkForPrime(i)){
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10))