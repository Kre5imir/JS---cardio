function multiply (nums) {
    // let sum = 1
    // let result = []
    // for (var i=0; i<array.length; i++) {
    //     console.log(array[i] + 'im I')
    //     for (let j = array.length - 1; j>= 0; j--){
    //         console.log(array[j] + ' j Im')
    //         if(j != i){
    //         sum = sum * array[j]
    //         console.log(sum)
    //         }
    //     }
    //     result.push(sum);
    //     sum = 1;
    // }
    let result = [];
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        // compute left product for nums[i]
        result[i] = left;
        console.log(result[i] + ' im res i')
        console.log(nums[i] + ' im nums i')
        left *= nums[i];
        console.log(left + ' im left')
        console.log(result + ' im res')
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        // compute right product for nums[i] and multiply it with the left product
        result[i] *= right;
        console.log(result[i] + ' im res i')
        right *= nums[i];
        console.log(right + ' im right')
        console.log(result + ' im res')

    }

    return result;
}
console.log(multiply([3,2,1,5]));