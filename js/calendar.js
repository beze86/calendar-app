let cleanHouse = () => {
    let areas = [
        'small toilet',
        'main toilet',
        'kitchen',
        'bins',
        'common areas'
    ]

    let housemates = [
        'Bez',
        'Dani',
        'Caro',
        'Billy',
        'Reinaldo'
    ]

        return cleaningTask(housemates, areas);
}

let randomLocation = (location) => {
    let randomNr = Math.floor(Math.random()*location.length);
    let loc = location[randomNr];
    location.splice(randomNr, 1);
    return loc;
    }

let cleaningTask = (mates, location) => {
    let tasks = [];
    mates.forEach((mate) => {
        let personsWithTasks = {};
        personsWithTasks[mate] = randomLocation(location);
        tasks.push(personsWithTasks);
    })
    return tasks;
}



 module.exports = cleanHouse;   
   