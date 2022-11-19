
/**
 * returns the digit in num at the given place
 */
function getDigit(num, i){
    /**
     * 
     * Math.abs makes sure that we cover the negative numbers (in case we have -234 we wanna return 3 not -3)
     */
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

/**
 * returns the number of digits in num
 */
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/**
 * this function will return the number with the most digits
 * @param {*} nums 
 */
function mostDigits(nums){
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits;
}

function radixSort(nums){

    //number with the most digits
    let maxDigitCount = mostDigits(nums);

    for(let k = 0; k < maxDigitCount; k ++){
        //this will crate an array of 10 objects
        let digitBuckets = Array.from({length:10}, () => []);
        for(let i = 0; i < nums.length; i ++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log("getDigit", getDigit(254, 2))
console.log("digitCount", digitCount(234))