// function display(data) {
//     console.log(data);
//   }
//   const futureData = fetch("https://twitter.com/veronica/tweets/");
//   futureData.then(display); // Attaches display functionality
//   console.log("Me First");


// let div = document.addEventListener("click", () => {
//             //since the code has to wait before this is exectuted( a user has to make a click) this would be asyncronous
//             //


// })
//In the code below the fib would execute first, then the clg, then setTimeout
// setTimeout(()=>{

//     console.log("Inside of setTime Out");


// }

// ,0
// )

function fib(n){
    if(n<2)
        return n

    return fib(n-2) + fib(n-1);
}
// console.log(fib(40));

// console.log("Outside of Set time out");

// fetch(url) // fetch is a promise
// .then()
// .then()
// .then()
// .catch
// then.Promise

// let result = 0;

// let promise = new Promise((resolve, reject) => {
//     if(true){
//         let result = fib(40);
//         resolve(result);
// }
// else{
//     reject("The code didn't work")
// }
    
// });

// promise.then(fibResult =>{
//     console.log(fibResult);
//     return fibResult * 2 ;
// })
// promise.then(mult2 =>{
//     console.log(mult2);
    
// })
// promise.catch(error=>{
//     console.log(error);
// })

// //sycnh code

// console.log("hey!");


// let fetch = new Promise((resolve, reject) =>{

//     const request = new XMLHttpRequest(); //XHR object
//     request.onreadystate = function(){
//         if(this.readyState ===4){

//             resolve(this.responseText)
//         }

//         else if(this.status === 400){
//             reject(`error:can't fetch url`)
//         }

//     }
//     request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//     request.send();

// });


// fetch.then(response=>{
//     let resp = JSON.parse(response)
//     console.log(resp);
//     return resp
// })

// fetch.then(data =>{
//     console.log("data received", data);
// })


let arr = [];

fetch('https://jsonplaceholder.typicode.com/photos')
.then(result => result.json())
.then(data =>{

    arr.push(data);
})
        let p1 = fetch('https://jsonplaceholder.typicode.com/photos');
        let p2 = fetch('https://jsonplaceholder.typicode.com/todos');

Promise.all([p1,p2])
.then(respArr =>{

    let arr = [];

    arr.push(respArr[0].json());
    arr.push(respArr[1].json());

    return Promise.all(arr);

    // respArr[1].data;

    // console.log(respArr);

})

.then(data =>{
    console.log(data);
})








