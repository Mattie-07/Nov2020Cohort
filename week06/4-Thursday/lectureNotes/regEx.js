// let patt = /long/g;
// let result = patt.test("today is a great day");
// console.log(result);
// let city = "Houston Seattle Tampa Chicago Houston".replace(/Houston|Seattle/gi, "Atlanta")
// console.log(city);
// // g in reg expression means every occurenc of that pattern will be used



// let pattern = /Batman|Tina Fey/g;
// let str = "Batman and Tina Fey.";
// // let result = pattern.exec(str);
// //or
// let result = str.match(pattern);
// console.log(result);

//checks to see if the pattern below has a number between 0 - 9
// let patt = /(\d\d\d)-(\d\d\d-\d\d\d\d)/


// let str = "My phone number is 333-444-3333"


// let result = str.match(patt);
// console.log(result); // result was printed in array format. 

// let pattern = /Bat(man|mobile|copter|bat)/gi; checks to see if bat / any of the words aferward would match with the string "pattern"

// let str = "Batman lost batlost batman batcopter a wheel";

// let result = str.match(pattern);
// console.log(result);

// let pattern = /Bat(wo)?man/g;
// let str = "The Adventures of Batwoman";
// let result = str.match(pattern);
// console.log(result);

// let patt = /(\d\d\d-)?(\d\d\d-\d\d\d\d)/g // the dash has to be inside of the hpyhen.

// let str = "my phone number is 687-776-8834"
// let noArea = "myphone number is not 554-5554"

// let result1 = str.match(patt);
// let result2 = noArea.match(patt);

// console.log(result1);
// console.log(result2);

let pattern = /Bat(wo)+man/;
let str1 = "The Adventures of Batman";
let str2 = "The Adventures of Batwoman";
let str3 = "The Adventures of Batwowowowoman";
let result = str1.match(pattern);
console.log(result);


// let result = str2.match(pattern);
// let result = str3.match(pattern);