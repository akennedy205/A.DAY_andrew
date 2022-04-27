const { init } = require('../init.js');

class Habit {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.habits = data.habits;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('userTracker').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const allHabits = dbData.map((d) => new Habit(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!allHabits.length) {
          throw new Error(
            'you dont have any habit that you are tracking at the moment!'
          );
        }
        resolve(allHabits);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }
  static create({ habits }) {
    return new Promise(async (res, rej) => {
      try {
        let newHabit = {
          habits: habits,
        };

        const createHabit = await db
          .collection('userTracker')
          .insertMany(newHabit);

        let habit = new Habit(createHabit.rows[0]);
        res(habit);
      } catch (err) {
        rej(`Error creating user: ${err}`);
      }
    });
  }
  static findByHabit(habits) {
    return new Promise(async (res, rej) => {
      try {
        let find_habits = { habits: habits };

        const findHabit = await db.collection('userTracker').find(find_habits);

        let habit = new Habit(findHabit.rows[0]);
        res(habit);
      } catch (err) {
        rej(`Error retrieving user: ${err}`);
      }
    });
  }
}

////all the different functions get/create/update/delete

module.exports = Habit;
