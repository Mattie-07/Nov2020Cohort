// var fruit =  "Papayas";

// switch(fruit){

//     case "Oranges":
//         console.log('oranges');
//         break;
//     case "Mangos":
//         console.log("mangos");
//         break;
//     case "Papayas":
//         console.log("papayas");
//         break;
//     default:
//         console.log("default");
        
// }

// var age = 5;


// switch (true){
//     case 18:
//         console.log("You aren't able to drink");
//         break;
//     case 21: 
//         console.log("You are able to drink. You are Twenty-one!");
//         break;
//     case (age < 18):
//         console.log("Sorry, you aren't able to drink right now. Well not legally at least");
//         break
//     default:
//         console.log("You are old enough to drink! Congradulations!");
// }

// var count = 0;

// while (count < 10){
//     console.log(count);
//     count++
// }


// var total = 80;
// var coinTotal = [25,10,5]
// var coinsUsed = 0;

// while(total > 0){   
//     if(total >= 25){
//         total -= coinTotal[0];
//         console.log(total)
//         coinsUsed++
//         // console.log(coinsUsed);
//     }

//     else if( total >= 10){
//         total -=coinTotal[1];
//         console.log(total);
//         coinsUsed++
//         // console.log(coinsUsed)
//     }
//     else{
//         total -= coinTotal[2];    
//         console.log(total)
//         coinsUsed++
//         // console.log(coinsUsed)
//     }
// }
// console.log(coinsUsed);
// shift and unshift removes and adds elements to the beginning of the array.

// for( var count = 0 ; count < 10; count ++)
//     {console.log(count);


// Push adds to the end of an Array. 
// Pop removes a value from the end of the Array. 




// var myArray = [5,6,4,8];
// myArray[2] = 2225;
// // console.log(myArray);

// // myArray.push(99);
// // console.log(myArray);
// // console.log(myArray);

// myArray.pop();
// console.log(myArray);

// myArray.shift();
// console.log(myArray);

// myArray.unshift(244);
// console.log(myArray);


// var lottoNumb = [ 23, 11,43,10,40];

// var arrayOfSplicedValues = lottoNumb.slice(2,3);

// console.log(arrayOfSplicedValues);
// console.log(lottoNumb);

// var somestring ="abcdefghijklmn opqrstuvwxyz";


// let chars = somestring.split('');

// console.log(chars);

// let alpha2 = chars.join("");
// console.log(alpha2);

// // var a ="6"
// // var intA = parseInt(a);
// // console.log(intA + 3);


// ParseInt
// split
// revese 
// join



// let number = 5646544;
// toString(number)
// console.log(number);
// let newString = number.split('')

// console.log(newString);
// arrayString = number.join();
// console.log(arrayString);



// var num = 3982538;
// console.log(num);
// let a = num.toString();
// let b = a.split('');
// let c = b.reverse();
// let d = c.join('');
// var NewNum = parseInt(d)
// console.log(d);


// var arr = [6,4,4,6, 5, 3 ]

// for (var index = 0; index < arr.lenth; index++){

// //     arr[0]

// var phoneBook = {
//         firstName : "Matthew",
//         lastName :"Roberts"

// }

// phoneBook["middlName"] = "Terry";
// phoneBook['lastName'] = "Robby";


// delete phoneBook['lastName'];
// console.log(phoneBook);

function  fname(){
    console.log("a function was executed");
}


function add(num1, num2) {

return num1 + num2;
}

console.log(add(7, 20));
one = 1;
two = 2;

console.log(`The sum of the numbsr is ${one + two}`);