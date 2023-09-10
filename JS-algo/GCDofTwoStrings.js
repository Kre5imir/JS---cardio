let str1 = 'ABAB'
let str2 = 'ABABABC'

function GCDofStrings(str1, str2){
    if(str1 + str2 === str2 + str1) return 'itself';

    function isValid (char, str){
        if(str.length == 0) return true;
        if(!str.startWith(char)) return false;
        return isValid(char, str.slice(char.length))
    }
    let res = '';

    for(let i = 0; i < str1.length; i++){
        let cur = str1.slice(0,i)
        console.log(cur)
        if(isValid(cur, str2) && isValid(cur,str2)){
            res = cur
        }
    }
    return res
}

console.log(GCDofStrings(str1,str2))