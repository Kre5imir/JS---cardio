const arr = [ 1,2,3,4,5,6,7,8,3]

function sortTHeOdd (arr){
    let arr2 = []
    for (i in arr){
        if (arr[i]%2 !== 0) {
            arr2.push(arr[i])
        }
    }
    console.log(arr2)
}

sortTHeOdd(arr)

const array = [5, 3, 2, 8, 1, 4] // to: [1, 3, 2, 8, 5, 4]

function sortOddsOnly(arr) {
    const odds = arr
        .filter(x => x%2)
        .sort((a, b) => a - b);
        
    return arr
        .map(x => x%2 ? odds.shift() : x);
}


function sortArray(array) {
    var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  console.log(odds)
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
  }

  function sortArray2(array) {
    if(array.length == 0) {
      return array;
    }
  
    for(var i=0;i<array.length-1;i++)
    {
      for(var j = i; j < array.length; j++)
      {
        if((array[i] != 0) && (array[i] % 2 != 0) &&
          (array[j] != 0) && (array[j] % 2 != 0))
          {
            if(array[i] > array[j])
            {
              var temp = array[i];
              array[i] = array[j];
              array[j] = temp;
            }
          }
      }
    }
    
    return array;
  }
