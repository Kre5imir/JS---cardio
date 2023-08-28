// Find missing letter in alphabet
// SOLUTION 1. 

function missingLetter(str){
    let compare = str.charCodeAt(0)
    let missing;

    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare ){
            ++compare; // since this is a number we want to move to next 
        } else {
            missing = String.fromCharCode(compare)
        }
    })
    return missing
}
console.log(missingLetter('abce'))