// square each number in an array and return a new array


var newArray = [2, 4 , 6 , 20, 13];

var sqArray = newArray.map(function(element){
        return element * element
})
console.log(sqArray);