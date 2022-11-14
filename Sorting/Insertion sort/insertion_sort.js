function insertSort(arr){

    // we start from 1 so we can compare it to the left side 
    for(var i = 1; i < arr.length; i++){
        console.log(i);
        var currentValue = arr[i];
        console.log("currentValue", currentValue)
        
        for(var j = i - 1; j >= 0 && arr[j] > currentValue; j --){
            console.log("j", j)
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;

    }

    return arr;
}


console.log(insertSort([1, 15, 4, 89]))