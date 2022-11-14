function selectionsort(arr){

    for(var i = 0; i < arr.length; i ++){
        //will consider the first place on the list the lowest!
        var lowest = i;
        // we start from i + 1 because we don't wanna comapare the first one with the first one, because we already consider it as the minimum value
        // 1. we found the minimum first!
        for(var j = i + 1; j < arr.length; j++){

            if(arr[j] < arr[lowest]){
                lowest = j;
            } 

        }
        // 2. we do the swap!
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }

    }
    return arr;
}

console.log(selectionsort([58, 3, 21, 4, 100]))