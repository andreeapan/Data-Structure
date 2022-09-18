/*
Write a function which accepts an array on integers and numbers called n. 
This function should calculate the maximum sum of n consecutive elements in the array.
*/

//first option
// function maxSubarraySum(arr, num){

//     if(num > arr.length){
//         return null;
//     }
    
//     let max = -Infinity;

//     //todo Ask Alex!!!
//     for(let i = 0; i < arr.length - num + 1; i++){
//         temp = 0;
//         // de ce a inceput de la 0?
//         for(let j = 0; j < num; j++){
//             temp += arr[i+j];
//         } 
//         if(temp > max){
//             max = temp;
//         }
//     }
//     return max;
// }

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))

//second option
function maxSubarraySum(arr, num){

    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < num) return null;

    for(let i = 0; i < num; i++){
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))