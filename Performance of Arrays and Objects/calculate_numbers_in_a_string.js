// function calc(str){
//     let obj = {};
//     console.log("str", str);
//     for (let i = 0; i <str.length; i++){
//         let char = str[i].toLowerCase();
//         console.log("char", char);
//         if (/a-z0-9/.test(char)){
//             if (obj[char] > 0){
//                 console.log("result[char]", obj[char]);
//                 obj[char] ++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//
//     }
//         return obj;
//     // console.log(result)
// }

function calc(str){
    let obj = {};
    console.log("str", str);
    for (let char of str){
        char.toLowerCase();
        console.log("char", char);
        if (isAlphaNumeric(char)){
            obj[char] = ++obj[char] || 1;
        }
    }
    console.log(obj)

    return obj;
}

function isAlphaNumeric(char){
    let code = char.charCodeAt(0);
    if ( !(code > 47 && code < 58 ) && // numeric
         !(code > 64 && code < 91) &&
         !(code > 96 && code < 123) // upper alpha
    ) {
        return false;
    }
    return true;

}


calc("say something");
// console.log(calc("say something"))