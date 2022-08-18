function same(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false;
    }

    for (let i = 0; i < arr1.length; i++){
        //this will search in array2 if there is a square element of array1
        let correctIndex = arr2.indexOf(arr1[i] *2);
        if (correctIndex === -1){
            return false;
        }
        arr2.splice(correctIndex, 1);
    }

    return true;
}

console.log(same([1,2,3], [9,4,1]));