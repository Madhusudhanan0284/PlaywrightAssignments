//classroom activity:
//Print only duplicate elements from array

let arr = [1,2,3,2,4,5,1,4,9,7];
let arr1 = []
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if (arr[i]==arr[j]) {
            //To print values alone
            console.log("The duplicate values are : " +arr[j]);
            //To store values in separate array
           arr1.push(arr[i])
        }   
    }    
}
console.log(arr1);