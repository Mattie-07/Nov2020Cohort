//Below is destructing an array


// let arr =[1, 2, 3, 4, 5];
// let [a, b, c, d ,e] = arr;

// console.log(d,arr);



// //Destructing an object
// var luke = {occupation:"jedi", father: "anakin"};
// var occupation = luke.occupation;
// var father = luke.father;
// let luke = {occupation:"jedi", father: "anakin"};
// let {occupation, father} = luke;
// let add = (a = 0, b = 0) => {
//     a =  a || 0; //This was the old way values were inserted in emthod for deafult vaues
//     b = b || 0;
//         return a + b;
// }
// console.log(add(4));

// // A rest operator is a used 
// let sum = (...args) => {

//     let sum = 0;
//     sum = args.reduce(( acc, elem) => acc + elem ,0 )


//     return sum;

//     }, 0)
// }
// let result = sum(5,8,9,10);
// console.log(result);cd 