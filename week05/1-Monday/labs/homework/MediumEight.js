var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

var shortestName = people.sort(function(indexOne, indexTwo){

        return indexOne.length - indexTwo.length
        
})

console.log(shortestName);
// im assuming that it is looking at each index and comparing both of them. It returns the lowest of the two and continues to sort through the entire array 