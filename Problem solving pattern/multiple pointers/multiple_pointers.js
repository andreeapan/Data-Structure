//first option 
// function sumZero(arr){

//     for(let i=0; i < arr.length; i++){
//         for(let j= i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))

//second option 
// function sumZero(arr){

//     let left = 0;
//     let right = arr.length - 1;

//     while(left<right){

//         let sum = arr[left] + arr[right];
        
//         if(sum === 0){
           
//             return [arr[left], arr[right]];
//         } else if(sum > 0){
            
//             right--;
//         } else {
            
//             left++;
//         }
            
//     }
// }

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 10]))

/*
Implement a function which accepts sorted arrays, 
and counts the unique values in the array. There can be
negative numbers in the array, but it will always be sorted.
*/

//todo ASK ALEX!!
function countUniqueValues(arr){
    if (arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++){
        if(arr[i] !== arr[j]){
            //we need to move i;
            i++;
            arr[i] = arr[j]    
        }
    }
    return i + 1;
}
                                                 i     
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 5, 5, 5, 6, 7]))
                                                                j  