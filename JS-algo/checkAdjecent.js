// /**
//  * @param {number[]} flowerbed
//  * @param {number} n
//  * @return {boolean}
//  */

let flowerbed = [1,0,0,0,0,1]
let n = 2
var canPlaceFlowers = function(flowerbed, n) {
    
    let total = 0
    for(let i =0; i < flowerbed.length; i++){
        flowerbed = [0, ...flowerbed, 0]
        if(flowerbed[i] === 0 && flowerbed[i + 1] === 0 && flowerbed[i - 1] === 0){
            flowerbed[i] = 1
            n--
        }
    }
    return n <= 0

};

console.log(canPlaceFlowers(flowerbed, n))