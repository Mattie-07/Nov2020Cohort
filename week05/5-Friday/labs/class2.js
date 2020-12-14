// const isUnique = (arr) => {

//     let cache = {};
//     let result = true;

//     for (let i = 0; i < arr.length; i++) {
//         //arr[i] check to see if it is in the cache or not

//         if(cache[arr[i]]){
//             return false;
//         }
//         else
//             cache [arr[i]] = true;

//     return result;
// };
// }
// let arr1 = [1, 2, 2 ,3 ];
// console.log(isUnique(arr1));

  // console.log(isUnique([1,2,3]) === true);
  // console.log(isUnique([1,1,3]) === false)

//     const uniqSort = function(arr) {
//         let cache = {};

//         let result = [];

//         for(let x = 0; x = arr.length; x ++)
//             if(!cache[arr[x]]){
//                 result.push(arr[x]);
//                 cache[arr[x]] = true;

//             }

//              result.sort((a,b) => a-b)

//         return result;
// };


// let arr = [1,5, 4, 4, 4, 19, 2, 5,2,19];

// console.log(uniqSort(arr));

