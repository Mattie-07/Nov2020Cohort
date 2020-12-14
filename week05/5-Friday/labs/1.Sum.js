// Create a function sum() that will sum all arguments passed to it.
// Quantity of the arguments is unknown.

// sum(1,3);
// sum(10, 20, 5);

let sumOne = (...args) => {
    
    return args.reduce((acc, val) => {          //why is there a return statement on the line. 
        return acc + val
    },0)


}
console.log(sumOne(1,3));

// let logArguments = (...args) =>{

//     //args is an array

//     args.forEach(el => {
//         console.log(el);
//     } )

// }

// logArguments(5, 6, 7, 8, 9);
