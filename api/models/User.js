const { init } = require('../init.js');

class User {
  constructor(data) {
    this.username = data.username;
    this.name = data.name;
    this.age = data.age;
    this.gender = data.gender;
    this.email = data.email;
    this.passwordDigest = data.password;
    this.quote = data.quote;
    this.habits = data.habits;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('userTracker').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const users = dbData.map((d) => new User(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!users.length) {
          throw new Error('you coudn that you are tracking at the moment!');
        }
        resolve(users);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }
}
////all the different functions get/create/update/delete

module.exports = User;
