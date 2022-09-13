// function same(arr1, arr2){
//     if (arr1.length !== arr2.length){
//         return false;
//     }

//     for (let i = 0; i < arr1.length; i++){
//         //this will search in array2 if there is a square element of array1
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1){
//             return false;
//         }
//         arr2.splice(correctIndex, 1);
//     }

//     return true;
// }

// console.log(same([1,2,3,2], [9,4,1,4]));

// //Refactor
// /*
// Notes:
// - 2 separate loops are better than 1 nested loop;

// */

// function sameRefactor(arr1, arr2){

//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//     }
//     for(let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//     }
//     //tood ask Alex
//     for(let key in frequencyCounter1){
//         if(! (key ** 2 in frequencyCounter2)){
//             return false;
//         }
//         if(frequencyCounter2[key **2] !==frequencyCounter1[key]){
//             return false;
//         }
//         return true;
//     }

// }

// console.log(sameRefactor([1,2,3], [9,4,1]));


function validAnagram(str1, str2){
    if (str1.length !== str2.length){
        return false;
    }

    const lookup = {}

    for(let i = 0; i< str1.length; i ++){

        //take first letter
        let letter = str1[i];

        //if letter exists, incremenet, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 

    }

    console.log("lookup", lookup)

    for(let i = 0; i < str2.length; i++){

        let letter = str2[i];

        //can't find letter or letter is zero then it's not an anagram
        if(!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }

    }

    return true;
  }

  console.log(validAnagram('anagram', 'nagaram'));