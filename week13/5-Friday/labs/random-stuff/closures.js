// function add(){
//     let x = 1 ;
//     let y = 20;
//     function f(){
//         setTimeout(() =>{
//             console.log(x + y);
//         }, 5000)
//         return x + y
//     }
//     f();
//     console.log('add function has completed');
//     return;
// }

// add();
// console.log('outside of our function')


// let result = (function(x,y){
//     return x + y
// })(3 + 4)

// let $ = (()=>{
//     const pi = 3.14;

//     function multPi(multiplier){
//         return pi * multiplier
// }
//     let $ = {
//         mutliplyPi: multPi
//     };
//     return $
// })()

// $.mutliplyPi(5)
// console.log($.mutliplyPi(5))


const times10 = (n) => n * 10;


const memoTimes10 = (p) => {
    const cache ={}
    function memo(n){
    if(n in cache){
        console.log('Fetching data from cache:', n);
        return cache[n]
    }
    else{
        console.log('Calculating resul')
        cache[n] = times10(n)
        return cache[n];
    }
}
    return memo(p)
}
console.log('Calculationg value of 9' , memoTimes10(9)); // calculated
console.log('cache value of 9' , memoTimes10(9));//cache