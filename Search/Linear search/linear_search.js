function linearSerch(arr, value){

   if(arr.includes(value)){
    return arr.indexOf(value);
   } 
   else {
    return -1;
   }

}

console.log(linearSerch([10, 15, 20, 25, 30], 15))