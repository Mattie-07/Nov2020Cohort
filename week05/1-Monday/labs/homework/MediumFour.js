var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];
    var newArray = []

    var lowestTemp70 = cities.filter(function(element){
        if (element.temperature > 70)
                return element.name;

    })
    
    console.log(lowestTemp70[0].name);