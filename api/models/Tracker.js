const { init } = require('../init.js');

const Habit = require('./Habit');
const User = require('./User');

class Tracker {
  constructor(data) {
    this.habit = data.habit;
    this.tracker = data.tracker;
  }

  ////////////////////////////////////////////////////////////////
  /*GET ALL PATH*/
  ////////////////////////////////////////////////////////////////

  static get all() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await init(); //connect to db. if we can't control how fast it returns, add an await
        const dbData = await db.collection('tracker').find({}).toArray(); //wait for us to find all of the dogs, not specifying anything in curly brackets. convert JSON object to a list (array).  easier to iterate thru.
        const trackers = dbData.map((d) => new Tracker(d)); //for each record, make a JS dog object. turn each one into a dog so you can  send it back

        if (!trackers.length) {
          throw new Error('you coudn that you are tracking at the moment!');
        }
        resolve(trackers);
      } catch (err) {
        reject(`Error retrieving habits: ${err.message}`);
      }
    });
  }
}

////////////////////////////////////////////////////////////////
/*GET Eath PATH*/
////////////////////////////////////////////////////////////////

////all the different functions get/create/update/delete

module.exports = Tracker;
