
// ** return reverse integer
const revString = (int) => { 
    const intRev = int.toString().split('').reverse().join('')
    console.log(intRev)
    return parseInt(intRev) * Math.sign(int)
}

let stra = "Hello"

function training (str) {


    //return str.split('').reverse().join('');

    let revString = '' 

    // ** since first letter is counted under 0 limit of loop is string length - 1 
    // for (let i = 0 ; i <= str.length - 1; i++) {
    //     let obj = {}
    //     obj[i] = str.charAt(i)
    //         console.log(obj)
    //         revString = obj[i] + revString 
    
    //     }
    //     return revString
    
    // ** while number of letters in array grater than zero
    // console.log(str.length)
    // for (let i = str.length - 1; i >= 0; i--) {
    //     console.log(str[i])
    //     revString =  revString + str[i]

    // }

    // **call by each letter
    // for ( let char of str) {
    //     revString = char + revString
    // }

    // ** number of array
    // for ( indexOfString in str) {
    //     revString = str[indexOfString] + revString
    // }

    // ** for each 
    //str.split('').forEach(char => revString = char + revString);

    //** reduce 
    //return str.split('').reduce(function(revString, char) { return char + revString;}, '');
    return str.split('').reduce((revString, char) => {return char + revString;}, '');

} 
console.log(training(stra))


const mano = revString(-12345)
console.log(mano)