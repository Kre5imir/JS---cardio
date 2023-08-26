const Palindrome = (str) => {
    const isPalindrome = str.split('').reverse('').join('');
    return str === isPalindrome

    //SECOND SOLUTION 
    // let str2 = ''
    // const arr = str.split("");
    // arr.reverse();
    // str2 = arr.join('')
    // str2 === str ? console.log('yes') : console.log('no')  

}

Palindrome('ana') 