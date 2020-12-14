// ***Swap values of the two variables
var a = "first"
var b = "second"
console.log(a, b);
// second first

let arr1 = [1, 2, 3, 4];

let arr2 = [8, 5, 6, 9];

// let temp = arr1[0]
// arr1[0] = arr2[0];
// arr2[0] = temp;
console.log(arr1, arr2);



[ arr1[0], arr2[0] ] = [ arr2[0], arr1[0] ] ;
console.log(arr1, arr2);