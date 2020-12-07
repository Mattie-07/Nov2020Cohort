// Going to create 2 anchor tags.
// They are childrn of the div tag//
// We apend ( attach) 2 anchor to my div
// create a nav eleement
// append a div to a nav element
// find body element
// find nav element to body.



//Nav bar 
// anchor elements first


var a1 = document.createElement("a")
a1.textContent = "Categories"
a1.setAttribute("class","display-4 nav-item nav-link  ml-5")

var a2 = document.createElement("a");
a2.textContent = "Home";
a2.setAttribute("class","display-4 nav-item nav-link active ml-5");

var a3 = document.createElement("a");
a3.textContent = "High On Coding";
a3.setAttribute("class", "display-2 nav-link active")


var div = document.createElement("div");
div.setAttribute("class", "nav navbar-nav ml-5")

div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);

var nav = document.createElement("nav")
nav.setAttribute("class", "navbar navbar-expand navbar-light bg-info" );

nav.appendChild(div);



var fluidContain = document.createElement("div");
fluidContain.setAttribute("class", "fluid container");


// var body = document.querySelector("body");
// body.appendChild(nav);





