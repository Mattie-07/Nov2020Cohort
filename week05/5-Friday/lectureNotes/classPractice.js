// let name = "Tiger";
// let age = 13;

// console.log(`My cat's name is ${name}`);

// let arr = ["one",
// "two"];

// console.log(arr);

// console.log(`hello
// world
// // `);
// let age = 23
// let arr = [1, 3 , 17]

// console.log(`Im not ${age.toString()}  ${arr.map(el => el + 1)}`);



// let mult = (a, b ) => a * b;

// let setSimeout () =>{
//     console.log(mult(5,10));
// },1000
// }




// setTimeout(function() {
//         console.log(mult(5,10));
// }, 1000)


// var arr = [1, 2 , 3 , 4];

// ;var a = arr[0];


// let arr = [1, 2 , 3 , 4];

// let [a, b ,c , d] = [1, 2, 3 ,4 ];

// console.log(c);



// let luke = {occupation :" jedi", father: "anakin"};

// let{occupation, father} = luke;
// console.log(occupation, father);




// let add = (x , y) =>{
//     x = x || 0;
//     y = y || 0;
//     return x + y;
// }


// console.log(add());

let logArguments = (...args) =>{

    //args is an array

    args.forEach(el => {
        console.log(el);
    } )

}

logArguments(5, 6, 7, 8, 9);

//the old way is below
// let occupation = luke.occupation;
// let father; 

