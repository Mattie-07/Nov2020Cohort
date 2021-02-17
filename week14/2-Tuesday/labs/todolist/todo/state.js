let state = {
    fName: "Matthew",
    lName: "Roberts",
    city: "Houston"
}

console.log(state);

let newState = {
    ...state,
    middleName:"Terence"
}


console.log(newState)