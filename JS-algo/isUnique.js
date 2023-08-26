const isUnique = (str) => {
    //create object
    const obj = {}
    // store in object
    for (let i of str) {
        console.log(obj[i])
        (!obj[i])? obj[i] = 1 :obj[i]++;
        console.log(obj)
    }
    //check if object has double letters
    for (let i in obj)
        if (obj[i] > 1)
            return false
    return true
}
const obj = isUnique('abc')

console.log(obj)
