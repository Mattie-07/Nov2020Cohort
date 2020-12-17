//Use the Game of Thrones API to grab a list of all the characters and which house they belong to
// When the house name is clicked, the house information is then displayed on the page.
//      The api is broken up into three different directories( and those are further broken up)
//          books, characters, houses.

// fetch("https://anapioficeandfire.com/api/")

let p1  = fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10");
let p2  = fetch("https://www.anapioficeandfire.com/api/characters?page=2&pageSize=10");
let p3  = fetch("https://www.anapioficeandfire.com/api/characters?page=3&pageSize=10");
let p4  = fetch("https://www.anapioficeandfire.com/api/characters?page=4&pageSize=10");
let p5  = fetch("https://www.anapioficeandfire.com/api/characters?page=5&pageSize=10");  
let p6  = fetch("https://www.anapioficeandfire.com/api/characters?page=6&pageSize=10");
let p7  = fetch("https://www.anapioficeandfire.com/api/characters?page=7&pageSize=10");
let p8  = fetch("https://www.anapioficeandfire.com/api/characters?page=8&pageSize=10");
let p9  = fetch("https://www.anapioficeandfire.com/api/characters?page=9&pageSize=10");
let p10  = fetch("https://www.anapioficeandfire.com/api/characters?page=10&pageSize=10");
let p11  = fetch("https://www.anapioficeandfire.com/api/characters?page=11&pageSize=10");

Promise.all([p1,p2,p3,p4,p5,p6,p7,p8,p9,p10])
.then(response =>{

    let gotCharacters = [];
    gotCharacters.push(response[0].json());
    gotCharacters.push(response[1].json());
    gotCharacters.push(response[2].json());
    gotCharacters.push(response[3].json());
    gotCharacters.push(response[4].json());
    gotCharacters.push(response[5].json());
    gotCharacters.push(response[6].json());
    gotCharacters.push(response[7].json());
    gotCharacters.push(response[8].json());
    gotCharacters.push(response[9].json());
    // gotCharacters.push(response[10].json());

    return Promise.all(gotCharacters);
})
.then(data=>{
    console.log(data);
    let characterArray = [];

    data.forEach((object)=>{
    characterArray = [...characterArray, ...object] 
    
    })
    // let gotPerson = data[0].name;
    console.log(characterArray);

    //descontruct the data array and loop through the values to display the names / houses.
    //do another fetch in order for the names inside of the book to be got.


    let bodyText = document.querySelector('body');
    bodyText.textContent = `Name of all the Characters In Game of Thrones `;
})













// fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10")
// .then(response => response.json())
// .then(data =>{
//     console.log(data);
//     gotCharacters.push(data);


    
//     let characterData = data.map(obj =>{

//             return `<li>${obj.name}</li> `
//     })

//     let testData = document.querySelector("ul");
//     testData.innerHTML = characterData.join("");


//     console.log(data.name);




// })