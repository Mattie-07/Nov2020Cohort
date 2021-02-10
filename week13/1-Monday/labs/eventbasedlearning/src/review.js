


class Button{
    constructor(color, text) {
        // this.color = color;
        // this.text = text
        // this.count = 0
        // All of this code above is the same as whats below

        this.state= {
            color: color,
            text: text,
            count:0
        }
    }
    count(){
        this.count +=1
    }
    print(){
        console.log(this.color)
    }
    render(){
            const {color, text, count} =this.state;
        return<>
        {someVar}
        </>

    }
}


let navButton = new Button('green','submit');


let myObj = {
    fName:"Matthew",
    lName:"Roberts",
};


const{fName, lName} = myObj;
// the below works but in React we can do a shortcut which is the code above.
// let fname = myObj.fname;
// let lname = myObj.lname;