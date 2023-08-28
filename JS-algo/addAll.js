// function addAll(){
//     //SOLUTION ONE take in all arguments as from ES5
//     // let numbers = Array.prototype.slice.call(arguments)
//     // let total = 0;
//     // for (let i = 0; i < arguments.length; i++){
//     //     total += arguments[i];
//     // }
//     // return total
// }

    //SOULTION TWO -> ES6
// function addAll(...arguments){ // spread operator to take all arguments
//     let total = 0
//     arguments.forEach( element =>
//         total +=  element )
//     return total
// }

  //SOLUTION THREE
  const addAll = (...arguments) => arguments.reduce((accumulator, currentValue) => accumulator + currentValue)

  console.log(addAll(1,2,3,4,5,5))