const fs = require("fs");
let file = "./stack.js"
fs.readFile(file,  (error, buffer) =>{
    if (error){
        console.error(error.message);
    }
    console.log(`File Data, ${buffer}`);
})
// let fileName = "./test.txt"
// fs.writeFile(fileName , "I love node!", (error) => {
//     if(error){
//         console.log(error.message);
//         return
//     }
//     console.log("File Saved at:" ,fileName);
// })
