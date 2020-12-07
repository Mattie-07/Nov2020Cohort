//1 . create an element 
var div = document.createElement("div");

div.innerHTML = "hello World"
var anchor = document.createElement("a")
anchor.textContent ="Google";//node

anchor.setAttribute("href", "http://Google.com")

var body = document.querySelector("body");

div.appendChild(anchor)
body.appendChild(div)

// 2p append element. 


var pNode = document.querySelector("p")
document.body.removeChild(pNode)