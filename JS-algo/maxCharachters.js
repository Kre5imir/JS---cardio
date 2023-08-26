function maxCharacter (str) {
    const obj = {}

    str.split('').forEach(function(char) {
        if (obj[char]) {
            obj[char]++;
        }
        else {
            obj[char] = 1;
        }
        } );
    let maxNumberOfCharacters = 0;
    let nameOFmaxChar = '';

    for (let char in obj){
        //debugger; => node inspect nameOfFile.js c to view where at repl to check variable
        if (obj[char] >= maxNumberOfCharacters) {
            maxNumberOfCharacters = obj[char]
            nameOFmaxChar = char
        }
    }
    console.log(nameOFmaxChar + '=>' + maxNumberOfCharacters)
}

//const maxCharacterInString = (str) => {
// for (let char of str)
    //     (!obj[char]) ? obj[char]=1 : obj[char]++;

    // let maxNum = 0;
    // let maximumChar = '';

    // for (let char in obj)
    // {
    //     if (obj[char] >= maxNum) 
    //     {
    //         maxNum = obj[char];
    //         maximumChar = char;
    //     }
    // }
    // console.log( `${maximumChar} appears ${maxNum} times`)}

maxCharacter("abccca");