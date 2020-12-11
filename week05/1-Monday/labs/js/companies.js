const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// map through and print all of the start and end dates, and the company name. of each object. 
// do a forEach first of the same above.



// companies.forEach(function(item){
//     console.log(item.name);
//     console.log(item.start);
//     console.log(item.end);


// })



// // /creeat an array with company names


// var companyName = companies.map(function(item){
//         return item.name

// })



// console.log(companyName);

// //filter companys that have a start date higher than 1990

// var lessthan90 = companies.filter(function(item){
//         if( item.start > 1990)
//             return item.name;


// })


// console.log(lessthan90);

// })

// var ageFilter = ages.filter((age)=> age<=35){

// ages.forEach(function(age){
//     let birth = 2020 - age + 5;
//     console.log(birth

// var MoreThan60 = ages.some(function(num){

//     return num > 80;

// })
// console.log(MoreThan60);



var arr = [5, 5, 64, 44, 55, 33]

var sum = arr.reduce(function(acc, currentVal){


    return acc + currentVal

}, 30)
console.log(sum);



var str = ["M", "a", "t", "t", "h", "e", "w"]



var name = str.reduce(function(acc,currentVal){

    return currentVal + acc

},"")

console.log(name);


// var mtr = "Matthew";
// var name = "";

// for(let har = 0; har < str.length; har ++){

// // name = name + str [har]; 
// name = str[har] + name ;
    


// var evenNumbers = ages.filter(function(num){

//     if ( num % 2 == 0)
//         return num;

// })

// console.log(evenNumbers);


// var arr = [5, 4, 6, 4, 3, 10, 239];

// var newArr = arr.filter(function(num){


//     return num > 7;





// var newAges = ages.map(function(age){

//     return age + 5 

// })

//     console.log(newAges);


// var students = ["matthew", "Kim", "Kanny"]


// var newStudents = students.filter(function(student){

//     return student != "Kanny"

// })


// console.log(newStudents);






// })

// console.log(newArr);

// var greetingsArr = students.map(function(student){

//     return `Hello ${student}`





// Filter out all ages greater than 35 



// Filter all even numbers


/// map through ages array and return a new ages array where 5 is added to each element.


// var newAges = ages.map(arrVAl => arrVAl +5)
//map through the companies array and change the end date to 2020


//using a for loop print each object of companies array 


//using forEach print each object of companies array


