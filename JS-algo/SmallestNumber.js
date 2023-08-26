
const arr = [11,6,3,2,5,4,8,5,1]

function smallestNumber(arr) {
    let smallestNumber;

    for (let i = 0; i < arr.length; i++){
        //begin at first index of the loop

        const arrNumber = arr[i];
        if ( i === 0) {
            smallestNumber = arrNumber; //compare first iteration to arrNumber
        }
            
        if (arrNumber < smallestNumber ) {
            smallestNumber = arrNumber;
        }
    }
    return smallestNumber
}

