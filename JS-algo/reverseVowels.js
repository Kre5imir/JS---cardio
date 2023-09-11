//create an array of vowels 
//create array to store the vowels from string 
//reverse the array of vowels from string
//push the reverse vowels from reversed array of vowels to string in place of existing vowels to new array
//join the array

var reverseVowels = function (s) {
    let pointerOfRevVowels = 0
    const allVowels = ['a', 'e', 'i', 'o', 'u'];
    const vowels = [];
    let reverseVowel = []
    result = []
    
    for(let char of s) {
        if(allVowels.includes(char)) {
            vowels.push(char)
        }
    }
    reverseVowel = vowels.reverse()
    for (let i = 0; i < s.length; i++){
        if(allVowels.includes(s[i])){
            result.push(reverseVowel[pointerOfRevVowels])
            pointerOfRevVowels ++;
        } else {
            result.push(s[i])
        }
    }
    return result.join('')
};
  

  console.log(reverseVowels('bananose'))