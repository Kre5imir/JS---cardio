let str1 = 'elbow><'
let str2 = 'bowel!a'

function isAnagram(str1, str2){
    // SOLUTION 1 
    return cleanWord(str1) === cleanWord(str2)
    
    
}

const cleanWord = (str) => {
    // ^ start from start w doesn't match number or character and g for global and replace with empty string
    return str.replace(/[^\w]/g, '') 
       .toLowerCase()
       .split('') //split to array by each character
       .sort()
       .join('')
}

console.log(isAnagram(str1, str2))