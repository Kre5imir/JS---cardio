let simpleString = 'I love js'

function capitalisLetter (str) {
    // SOLUTION 1
    // // **create array where each element is one word of small letters or arr[i]
    // const arrFromString = str.toLowerCase().split(' ')
    
    // // **loop through each element, make change to each element by changing only substring of array by joining different parts with + 
    // for (let i = 0; i < arrFromString.length; i++){
    //     arrFromString[i] = arrFromString[i].substring(0, 1).toUpperCase() + arrFromString[i].substring(1)
    // }
    // // **return string
    // return arrFromString.join(' ')

    // SOLUTION 2
    // ** use map function 
    // return str
    //     .toLowerCase()
    //     .split(' ')
    //     .map(x => x[0].toUpperCase() + x.substring(1))
    //     .join(' ')

    // SOLUTION 3
    // **use regularexpression b - boundry, g - for all word, i for case insensitive 
    // return str.replace(/\b[a-z]/gi , function(char){
    //     return char.toUpperCase()
    // })
    
}

console.log(capitalisLetter(simpleString))