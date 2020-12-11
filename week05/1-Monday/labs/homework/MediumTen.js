
function printStatement(){
    console.log("hello World"); 
    
}


function call3Times(fun){ 
    printStatement(); printStatement(); printStatement(); 
}
call3Times(printStatement);