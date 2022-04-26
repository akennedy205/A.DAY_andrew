const { init } = require('../init.js');

class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.email = data.email;
    this.passwordDigest = data.password;
    this.habit;
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
