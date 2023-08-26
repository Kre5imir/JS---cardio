function getCount(str){
    let vowles = ['a','e','i','o','u'];
    return str.split("").filter(letter => {
        return vowles.includes(letter)? true : false;
    }).length;
}

console.log(getCount('banana'));