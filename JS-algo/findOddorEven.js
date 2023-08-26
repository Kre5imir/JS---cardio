let arr = [-41645071,-16568306,-120007270,-124380996,191873788,-189571726,-167318588,-126650180,123697900,-50657238,41752340,-158663708,168085214,178395272,44557596,132733714,-163051492,166926584,-11656260,185172196,72326762,69542310,49730378,-54615524,75472662,40497038,174571218,140057026,191982260]
let arrEven = [-3,99,7,-2,9,111]

function findNumber (array) {
    let countOdd = 0;
    let countEven = 0;
    console.log(array)
    for (let i =0; i < array.length; i++){
        if (array[i] %2 === 0){
            countEven += 1;
        }
        else{
            countOdd +=  1;
        }

    }
    console.log(countEven)
    console.log(countOdd)
    if(countEven>countOdd){
        const numEven = array.filter(x => x%2 == 1)
        return Number(numEven)
    }
    else{
        const numOdd = array.filter(x => x%2 == 0)
        return Number(numOdd)
    }
    
}

findNumber(arr)

function filterNumber(arr) {
even = arr.filter((x) => x % 2 == 0);
odd = arr.filter((x) => x % 2 == 1);
if (even.length > odd.length) {
    return even;
} else {
    return odd;
}
}

function findOutlier(integers) {
    const even = [], odd = [], modulos = [even, odd];
    for (const integer of integers) {
      modulos[Math.abs(integer % 2)].push(integer);
    }
    return even.length > odd.length ? Number(odd) : Number(even);
  }
console.log(findOutlier(arrEven))