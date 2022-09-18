/*
Given a SORTED array of integers, write a function called search, that accepts a value
and return the index where the value passed to the function is located. If the value is not found, retunr -1;
*/

//first option
// function search(arr, val){
//     for(let i = 0; i <arr.length; i++){
//         if(arr[i] === val){
//             return i;
//         }
//         return -1;
//     }

// }

// console.log(search([1,2,3,4], 3))


//second option
function search(arr, val){

    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let middle = Math.floor((min + max) / 2);
        let currentElement = arr[middle];

        if (currentElement < val){
            min = middle + 1;
        }else if(currentElement > val){
            min = middle - 1;
        } else{
            return middle;
        }
    }
     return -1;
}

console.log(search([1,2,3,4], 3))