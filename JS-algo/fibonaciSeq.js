let num = 5
const arr = [0, 1]
for (i = 2; i < num; i++ ) {
    arr[i] = arr[i -1 ] + arr[i - 2]
}

console.log(arr)

//Big O(n)