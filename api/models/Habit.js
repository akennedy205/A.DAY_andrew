const { init } = require('../init.js');

class Habit {
  constructor(data) {
    this.username = data.username;
    this.habit = data.habit;
    this.frequency = data.frequency;
    this.status = data.status;
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init();
        const dbData = await db.collection('habitsTracker').find({}).toArray();
        const allHabits = dbData.map((d) => new Habit(d));
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
  static create({ habit }) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        let newHabit = {
          habit: habit,
        };

        const createHabit = await db
          .collection('habitsTracker')
          .insertMany(newHabit);
        res(createHabit);
      } catch (err) {
        rej(`Error creating habits: ${err}`);
      }
    });
  }
  static findByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        const user = await db
          .collection('habitsTracker')
          .findOne({ username: username });
        console.log(user);
        res(user);
      } catch (err) {
        rej(`Error retrieving habits: ${err}`);
      }
    });
  }
  static findHabitByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        const db = await init();
        const user = await db.collection('habitsTracker').findOneAndUpdate(
          { username: username },
          {
            $push: {
              habit: newHabit,
            },
          }
        );
        console.log(user);
        res(user);
      } catch (err) {
        rej(`Error retrieving habits: ${err}`);
      }
    });
  }
}

////all the different functions get/create/update/delete

module.exports = Habit;
