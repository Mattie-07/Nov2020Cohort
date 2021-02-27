let stack = []


class Stack  {
    contructor(){
    this.data = [];
}
    Pop(){
        return this.data.pop()
    }
    Push(el){   
        return this.data.push(el)
    }
    lenght(){
        return this.data.lenght;
    }
}

function isValid(string){
    let opening = {
        "(": true,
        "[": true,
        "{": true,
    }


    let closing = {
    ")" : "(",
    "]" : "[",
    "}": "{"
    }

    const stack = new Stack();

    for(let i = 0; i < string.length; i++){
        let char = string[i];

        if(opening[char]){
            stack.push(char)
        }

        if(char in closing){
            let result = stack.pop();

            if (result !== closing[char]){
                return false;
            }

        }

    }
    return stack.length() === 0 ? true: false


}