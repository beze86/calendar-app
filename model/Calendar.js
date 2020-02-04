const getDb = require('../db').getDb;

class Calendar {
    constructor(personsTask){
        this.personsTask = personsTask;
    }

    newTask() {
        const db = getDb();
        var today = new Date();
        // get next sunday, just by replacing the 0 i can choose another day
        let sunday = today.setDate(today.getDate() + (0 - 1 - today.getDay() + 7) % 7 + 1);
        
		return new Promise ((resolve, reject) => {
            this.personsTask.forEach((person) => {
				return db.collection('events').insertOne({ 
					text: `<p class="calendar__person-tasks pb-0 mb-0">${Object.keys(person)} : ${Object.values(person)[0].task}</p>`,
					start_date: sunday,
					end_date:	sunday,
					color: Object.values(person)[0].color
				}, (err, usersData) => {
                    if(err) {
                        reject('users tasks not added')
                    }else {
                        resolve(usersData)
                    }
                });
			})
        })
    }

    static getJsonData() {
        const db = getDb();
        return db.collection('events').find().toArray()
    }
}


module.exports = Calendar;