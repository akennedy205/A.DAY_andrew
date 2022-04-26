const { init } = require('../init.js');

class Habit {
  constructor(data) {
    this.id = data.id;
    this.habit = data.habit;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('tracker').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const habits = dbData.map((d) => new Habit(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!habits.length) {
          throw new Error(
            'you dont have any habit that you are tracking at the moment!'
          );
        }
        resolve(habits);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }
}

////all the different functions get/create/update/delete

module.exports = Habit;
