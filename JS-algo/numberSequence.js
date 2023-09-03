//check for the patern in numbers array
// if set has only one value return name of set 
//arithmetic pattern checks is it dividible geometric for divisibility
function mathSequence(arr) {
    let arithmetic = new Set();
    let geometric = new Set();

    for (let i = 1; i < arr.length; i++){
        let number1 = arr[i] - arr[i -1];
        arithmetic.add(number1);
       
        let number2 = arr[i] / arr[i - 1];
        geometric.add(number2);
        
    }
    if (arithmetic.size === 1){
        return "Arithmetic"
    }
    if (geometric.size === 1){
        return "Geometric"
    }
    return -1
}
console.log(mathSequence([2,4,6,8]))

console.log(mathSequence([2,4,8,16]))

console.log(mathSequence([2,5,6,7,10]))