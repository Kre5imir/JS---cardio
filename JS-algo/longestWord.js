let words = 'Hello there, my name is Mila or Milana'

function longestWord(str) {
    console.log(str)
    // filter words
    const wordsArray = str.toLowerCase().match(/[a-z0-9]+/g)

    // sort by legth descending
    const arrSorted = wordsArray.sort(function(a,b){
        return b.length - a.length
    })
    console.log(arrSorted)

    //filter array
    const lngWord = arrSorted.filter(x => x.length === arrSorted[0].length) 
    console.log(lngWord)

    if (lngWord.length === 1) {
        return lngWord[0];
    } else {
        return lngWord;
    }
}

console.log(longestWord(words))