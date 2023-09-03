let words = 'Hello there, my name is Mila or Milana'

function longestWord(str) {
    // SOLUTION one

    // // filter words
    // const wordsArray = str.toLowerCase().match(/[a-z0-9]+/g)

    // // sort by legth descending
    // const arrSorted = wordsArray.sort(function(a,b){
    //     return b.length - a.length
    // })
   
    // //filter array
    // const lngWord = arrSorted.filter(x => x.length === arrSorted[0].length) 

    // if (lngWord.length === 1) {
    //     return lngWord[0];
    // } else {
    //     return lngWord;
    // }

    //SOLUTION TWO
    const wordsArr = str.split(' ')
    let longestWord = ''

    for ( let word of wordsArr){
        if (word.length > longestWord.length){
            longestWord = word
        } 
    }
    return longestWord;
    
}

console.log(longestWord(words))