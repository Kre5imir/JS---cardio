//retrn numbers with most repeats
  
function repeatNumbers(arr){
    let max = 1;
    let position = 0;
    let value = -1;
    let tempNumbers = arr.reduce((acc,curr,index)=> {
        acc[curr] = acc[curr]? 
        {...acc[curr],amount:acc[curr]['amount'] + 1}: // if the propery is there we get all the properties by spread operator
                                    //amount will be equal to object(acc)and property[curr]and second propery amount and add one 
        {amount: 1, index:index};//since we have the object if the proparty is not there create new object
                                        // in object will be amount property and index with value of index
    let amount = acc[curr].amount;
    let place = acc[curr].index;
    if (amount > max || (amount === max && place <= position && amount > 1)){
        max = amount;
        value = curr;
        position = place;
    }    
     
        return acc
    },{})
    return value
}
console.log(repeatNumbers([1,2,4,5,5,7,6,2]));   
console.log(repeatNumbers([1,2,2,5,5,5,7,6]));   
console.log(repeatNumbers([1,2,4,5,7,6]));  