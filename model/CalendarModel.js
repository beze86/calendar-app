const getDb = require('../db').getDb;

class Calendar {
    constructor(personsTask){
        this.personsTask = personsTask;
    }

    newTask() {
        const db = getDb();
        let today = new Date();
        // get next sunday, just by replacing the 0 i can choose another day
        let sunday = today.setDate(today.getDate() + (0 - 1 - today.getDay() + 7) % 7 + 1);
        
        let sundayTasks = this.personsTask.map(({name, task, color}) => {
            return {
                text: `<p class="calendar__person-tasks pb-0 mb-0">${name} : ${task}</p>`,
                start_date: sunday,
                end_date:	sunday,
                color: color
            }
        });

        return db.collection('events').insertMany(sundayTasks);
    }

    static getJsonData() {
        const db = getDb();
        return db.collection('events').find().toArray()
    }
}


module.exports = Calendar;