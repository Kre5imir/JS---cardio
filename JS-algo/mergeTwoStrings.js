// /**
//  * @param {string} word1
//  * @param {string} word2
//  * @return {string}
//  */

var mergeAlternately = function(word1, word2) {
    console.log(word1)
    console.log(word1)

    const arr1 = word1.split('')
    const arr2 = word2.split('')
    const maxLength= Math.max(word1.length, word2.length)
    let str = []
    for (let i =0; i<=maxLength; i++){
            str.push( word1[i]);
            str.push( word2[i]);
    }
    return str.join('')
};