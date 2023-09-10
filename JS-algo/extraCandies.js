let candies = [2,3,5,1,4]
let extraCandies = 3
var kidsWithCandies = function(candies, extraCandies) { 
    let addExtra = []
    let candiesSorted = []
    let valid = true;
    const result = []
    for (let num = 0; num < candies.length; num ++){
        addExtra.push(candies[num] + extraCandies)   
    }

    candiesSorted = candies.sort((a,b) => b - a)
    let maxValeu = candiesSorted[0]
    
    for(let i = 0; i < addExtra.length; i++){
        if(maxValeu <= addExtra[i]){
            valid = true;
            result.push(valid)
        } else {
            valid = false;
            result.push(valid)
        }
    }
    return result
}
console.log(kidsWithCandies(candies,extraCandies))