const { init } = require('../init.js');

class User {
  constructor(data) {
    this.id = data.id;
    this.userName = data.user_name;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.email = data.email;
  }

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('tracker').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const trackers = dbData.map((d) => new User(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!trackers.length) {
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
