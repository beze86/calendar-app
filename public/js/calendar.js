let cleanHouse = () => {
    let areas = [
        'small toilet',
        'main toilet',
        'kitchen',
        'bins',
        'common areas'
    ]
    let housemates = [
        {name: 'Bez', color: '#ff4954'},
        {name: 'Dani', color: '#3ecf8e'},
        {name: 'Caro', color: '#FF69B4'},
        {name: 'Gabrielle', color: '#1D79D4'},
        {name: 'Reinaldo', color: '#ffba86'}
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
        personsWithTasks[mate.name] = {task: randomLocation(location), color: mate.color};
        tasks.push(personsWithTasks);
    })
    return tasks;
}



 module.exports = cleanHouse;   
   