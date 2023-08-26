let str1 = 'delbow><'
let str2 = 'bowel!a'

function shiftLetters(str){
    // SOLUTION 1 
    // all letters from a to z global i it doesn't matter if capital or lower case 
    let newString = str.replace(/[a-z]/gi, x => x === 'z' || x === 'Z' ? 'a' : String.fromCharCode(x.charCodeAt() + 1))

    return newString.replace(/a|e|i|o|u/gi, x => x.toUpperCase())
}



console.log(shiftLetters(str1))