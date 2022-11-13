// Before we sort, we need to swap!!

//ES5

// function swap(arr, index1, index2){

//     var temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// }

//ES2015
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
// }

function bubbleSort(arr){

    //start looping from the end of the array towards the beggining!!!
    for(var i = arr.length; i > 0; i--){
        var noSwaps = true;
        for(var j = 0; j < i - 1; j ++){
            console.log("array", arr, arr[j], arr[j+1]);
        if(arr[j] > arr[j+1]){
            //SWAP
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
        }         
    }
    if(noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([37, 45, 29, 8]))