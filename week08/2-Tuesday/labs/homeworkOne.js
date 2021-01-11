// write a program that prompts the user to input a file
//convert to caps
//print it out
const readline = require("readline")
const fs = require("fs")
const readingLine = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
readingLine.question("Please enter a file name\n", function(fileName){
    fs.readFile(fileName, (error, buffer)=>{
        if(error)
            console.log(`${error.message}`);
        else{
        let newString = buffer.toString().toUpperCase();
        console.log(`The file in uppercase should read, ${newString}`);
        }
})
})


