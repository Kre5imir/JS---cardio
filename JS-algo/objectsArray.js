const objArr = [
    {   id: 1,
        name : "Ivan",
        age : 34
    },
    {   id: 2,
        name : "Ivan2",
        age : 33
    },
    {   id: 3,
        name : "Ivan3",
        age : 32
    }
]
arr = []

// objArr.forEach(element => {
//     if (element.age < 33){
//         arr.push(element.name)
//     }
// });

//.map( user => {arr.push(user.name)})

const mapArr = objArr
        .sort((a,b) => a.age < b.age ? -1 : 1)
        .map( user => user.name)

console.log(mapArr)