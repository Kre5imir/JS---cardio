//SOLUTION ONE => objects
//const isUnique = (str) => {
//     //create object
//     const obj = {}
//     // store in object
//     for (let i of str) {
//         console.log(obj[i])
//         (!obj[i])? obj[i] = 1 :obj[i]++;
//         console.log(obj)
//     }
//     //check if object has double letters
//     for (let i in obj)
//         if (obj[i] > 1)
//             return false
//     return true
// }
//console.log(obj)
// const obj = isUnique('abc')

// SOLUTION TWO => use SET

// function isUnique(str){
//     let strTemp = new Set();

//     for (let letter of str){
//         if(strTemp.has(letter)){
//             return false
//         } else {
//             strTemp.add(letter)
//         }
//     }
//     return true;
// }

// console.log(isUnique('abcde'))

let objArr = [ 
    {title: "Iphone",
    company: "apple"
    },
    {title: "Iphone7",
    company: "apple"
    },
    {title: "Galaxy",
    company: "samsung"
    },
    {title: "htc phone",
    company: "htc"
    },
    {title: "Galaxy 21",
    company: "samsung"
    }
]

function getUnique(objArr){
    //SOLUTION one USE set and spread
    // let tempArr = objArr.map(item => item.company) /* 
    // return [...new Set(tempArr)]
    //SOLUTION two USE reduce, spread and set
    return [...objArr.reduce((acc,curr)=> {
        acc.add(curr.company)
        return acc
    }, new Set())]

}

console.log(getUnique(objArr))