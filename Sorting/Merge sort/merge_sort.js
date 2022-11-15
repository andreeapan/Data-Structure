//this function will work with two sorted arrays!
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    //we compare the 2 arrays
    while(i < arr1.length && j < arr2.length){

        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i ++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    //in case that arr1 didn' finish looping (has more values in it)
    while(i < arr1.length ){
        results.push(arr1[i]);
            i ++;
    } 

    //in case that arr2 didn't finish looping (has more values in it)
    while(j < arr2.length ){
        results.push(arr2[j]);
            j ++;
    } 


    return results;

    
}

function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}



console.log(mergeSort([10, 24, 76, 73]))