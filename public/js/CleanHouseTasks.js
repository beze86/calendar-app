class CleanHouseTasks {
  constructor() {
    this.housemates = [
      { name: "Bez", color: "#ff4954" },
      { name: "Dani", color: "#3ecf8e" },
      { name: "Caro", color: "#FF69B4" },
      { name: "Gabrielle", color: "#1D79D4" },
      { name: "Reinaldo", color: "#ffba86" },
    ];
    this.areas = [
      "small toilet",
      "main toilet",
      "kitchen",
      "bins",
      "common areas",
    ];
  }

  randomLocation() {
    let randomNr = Math.floor(Math.random() * this.areas.length);
    let loc = this.areas[randomNr];
    this.areas.splice(randomNr, 1);
    return loc;
  }

  cleaningTask() {
    return this.housemates.map(({name, color}) => {
      return {
          name: name,
          task: this.randomLocation(),
          color: color,
      }
    })
  }
}

module.exports = CleanHouseTasks;
