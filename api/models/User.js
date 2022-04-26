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
        const db = await init();
        //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('userTracker').find({}).toArray();
        //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const users = dbData.map((d) => new User(d));
        //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!users.length) {
          throw new Error('you coudn that you are tracking at the moment!');
        }
        resolve(users);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }

  static create({ username, name, email, password }) {
    return new Promise(async (res, rej) => {
      try {
        let newUser = {
          username: username,
          name: name,
          email: email,
          password: password,
        };

        const createUser = await db
          .collection('userTracker')
          .insertMany(newUser);

        let user = new User(createUser.rows[0]);
        res(user);
      } catch (err) {
        rej(`Error creating user: ${err}`);
      }
    });
  }
  static findByUsername(username) {
    return new Promise(async (res, rej) => {
      try {
        let findUsername = { username: username };

        const findUser = await db.collection('userTracker').find(findUsername);

        let user = new User(findUser.rows[0]);
        res(user);
      } catch (err) {
        rej(`Error retrieving user: ${err}`);
      }
    });
  }

  static findByEmail(email) {
    return new Promise(async (res, rej) => {
      try {
        let findEmail = { email: email };

        const findUser = await db
          .collection('userTracker')
          .find(findEmail)
          .toArray();

        let user = new User(findUser.rows[0]);
        res(user);
      } catch (err) {
        rej(`Error retrieving user: ${err}`);
      }
    });
  }
}

////all the different functions get/create/update/delete

module.exports = User;
