const getDb = require('../db').getDb;

class Calendar {
    constructor(personsTask){
        this.personsTask = personsTask;
    }

    newTask() {
        const db = getDb();
			let curr = new Date(); // get current date
			let first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
			let last = first + 7; // last day is the first day + 6
		return new Promise ((resolve, reject) => {
            this.personsTask.forEach((person) => {
				return db.collection('events').insertOne({ 
					text: `<p class="calendar__person-tasks pb-0 mb-0">${Object.keys(person)} : ${Object.values(person)[0].task}</p>`,
					start_date: new Date(curr.setDate(last)).toUTCString(),
					end_date:	new Date(curr.setDate(last)).toUTCString(),
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
}


module.exports = Calendar;