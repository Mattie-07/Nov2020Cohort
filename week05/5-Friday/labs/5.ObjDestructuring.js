// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// console.log(mult(obj));
// //300

// var mult = obj =>{
//     let { x, y ,z = obj};
//     return x * y *z;
// }
// console.log(mult);

// /*
// Create shortPerson() function that will destructure each person object.
// Sample result:
// {n: "Mike", c: "Spain", a: 23, p:100}

// If input object doesn't have postsQuantitiy field it should get default value 0.
// */


// var person1 = {
//     name: "Mike",
//     info: {
//         country: "Spain",
//         age: 23
//     },
//     postsQuantitiy: 100
// }

// var person2 = {
//     name: "Alice",
//     info: {
//         country: "Italy",
//         age: 25
//     }
// }


// var person1 = {
//     name: "Mike",
//     info: {
//         country:"italy",
//         age: 22 ,
//         arr : []
//     },
//     postQuantity:100
// }
// var person2 = {
//     name: "ALice",
//     info: {
//         country:"Spain",
//         age: 25
//     }
// }
// // person1.info.arr.map

// let person = (obj) => {
//     let {name:n, info:{country:c, age:a}, postQuantity:p  = 0} = obj;
//     console.log(`name ${n} country ${c} posts ${p}`);
// }

// person(person1);

a = 8;
b =20;

// (conditioin ? trueL : Ffalse);
//turnary statements are another way to do simple if statements.
let isNumber =  a => typeof(a) == "number" ? "thats a number": "Thats not a number";



console.log(isNumberisNumber(10));





// a == "number" ? "thats a number": "Thats not a number";




