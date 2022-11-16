// Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array;
/** 
 * Pivot Helper 
 * 
 * First implement a function responsible of arranging elements in an array on either side of a pivot
 * This function should designate an elemens as the pivot
 * It should rearrange elements in the array so that all values less than the pivtor are moved to the left of the pivtor, and all values greater than the pivtot
 * are moved to the right of the pivot. 
 * The order of the element on either side of the pivot doesn't matter!
 * it should not create a nre array!!!
 * When completed, the helper should return the index of the pivot
 */

function pivot(arr, start=0, end=arr.length + 1){

    function swap(arr, i, j){
        var temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;
    }

    var pivot = arr[start];
    var swapIdx = start;

    for(var i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i)
        }
    }
    swap(arr,start,swapIdx)
    console.log(arr);
    return swapIdx;

}

// console.log("pivot", pivot([4,8,2,1,5,7,6,3]))


function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
    var pivotIndex = pivot(arr, left, right); //3
    // left
    quickSort(arr, left, pivotIndex-1)
    // right
    quickSort(arr, pivotIndex+1, right)
    }
    return arr;
}

console.log("quickSort", quickSort([4,6, 9, 1, 2, 5, 3]))