// call variable as function because function is assigned to variable to get the secret 
const scFunction = () => {
    // function will return a function 
    const secret = 'secret';
    return  () => secret 
}

console.log(scFunction)

const getScFunction = scFunction()

console.log(getScFunction()) 