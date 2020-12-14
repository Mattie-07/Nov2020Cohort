
/*
Create a function sumObjectValues() that will sum all values of the fields that contain
number.  
Ensure that iteration is done only over own properties of the object
*/

var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}
//typeOf();
function sumObjectValues(nums){
    if( nums.isInteger)
        console.log("this works");

}



// Write code here 

console.log(sumObjectValues(nums));

//Andrea's code below
function sumObjectValues(obj){
    let sum = 0;
    for (let key in obj){
        if (typeof(obj[key]) == "number"){
            sum += obj[key];
        } 
        
    } 
    return sum;
}
console.log(sumObjectValues(nums));
// 42