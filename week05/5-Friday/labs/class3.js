//create a function that will check if it is an anagaram or not.




// var sentence = "Dirty room";
// var comparing = "dormitory"
// var wordNoSpace = sentence.replace(/[^\w]/g, "").toLowerCase();
// console.log(wordNoSpace);

// arrayWord = wordNoSpace.split("");
// console.log(arrayWord);
// newarr = arrayWord.sort().join("") // check to see if the join method returns a value or not
// // console.log(arrayWord);
// // arrayWord.join("");
// console.log(newarr);


const cache = {};


const memoTime10 = (n) =>{
    
    if( n in cache ){
        console.log("fetching from cache", n);
        
    }
    else{
        //store new value in cache
        return cache[n] = n * 10;
        //message
        console.log("Calculating results");
        //return n * 10
    }
    return cache;
}
memoTime10(9);