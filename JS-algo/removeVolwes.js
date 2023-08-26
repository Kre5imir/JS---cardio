const str = "This website is for losers LOL!"

function removeWalves (str) {
    const noVowels = str.replace(/[aeiou]/gi, '');
    console.log(noVowels)
}

removeWalves(str)

function disemvowel(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    
    return str.split('').filter(function(el) {
      return vowels.indexOf(el.toLowerCase()) == -1;
    }).join('');
  }

console.log(disemvowel(str))




const findvowels = (str) => {
  // this function is to count volwes
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  return str
          .toLowerCase()
          .split("")
          .reduce((acc, char) => ( vowels.includes(char) ? acc +1 : acc), 0
          );
}

console.log(findvowels(str))