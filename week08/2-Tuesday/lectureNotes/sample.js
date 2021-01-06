let Stack = require("./stack")

let stack1 = new Stack();
stack1.push(3)
stack1.push(30)
stack1.push(333)
stack1.push(332)
stack1.push(31)
console.log(stack1.peek());

let stack2 = new Stack();
stack2.push(1)
stack2.push(12)
stack2.push(3)
stack2.push(14)
stack2.push(6)
console.log(stack2.peek());


const superheroes= require("superheroes")
console.log(superheroes.all);


// let lastName = require("./anotherSample");
// let log = require("./log")
// log.info("This is a great day")
// log.warning("Pollution is a bit high, be careful")
// log.error("What are you doing!? Stop!")
// module.exports = name;