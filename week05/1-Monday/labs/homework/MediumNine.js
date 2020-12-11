// sort through 3 inner arrays , determine which has the highest sum , sort them by ascending order.
var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

// I should just use the reduce method and add up each of the individual arrays and move forward
anArray = [];

for(let x = 0; x < arr.length ; x++ ) {

    let anArray[x] = arr[x].reduce(function(acc, currentVal){
            return acc + currentVal;})
    console.log(anArray);       


}

// newArr = arr.sort(function(itemOne, itemTwo){
//         return itemOne[0] > itemTwo[0]
        
    

//     })
//             console.log(newArr);

        

            // examples of how the reduce function works
//     var arr = [5, 5, 64, 44, 55, 33]

// // var sum = arr.reduce(function(acc, currentVal){


// //     return acc + currentVal

// // }, )
// // console.log(sum);
