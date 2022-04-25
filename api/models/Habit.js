const seedsData = require('../dbConfig/dev_seed.js');
const { init } = require('../init.js');

class Habit {
  constructor(data) {
    this.id = data.id;
    this.habit = data.habit;
    this.username = {
      username: data.user_name,
      name: `${data.first_name}+" "+${data.last_name}`,
      path: `/users/${data.user_id}`,
    };
  }
  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('habits').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const dogs = dbData.map((d) => new Dog(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back
        if (!dogs.length) {
          throw new Error('No doggos here!');
        }
        resolve(dogs);
      } catch (err) {
        reject(`Error retrieving dogs: ${err.message}`);
      }
    });
  }
}

////all the different functions get/create/update/delete

module.exports = Habit;
