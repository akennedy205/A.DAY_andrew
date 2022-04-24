const { user } = require('pg/lib/defaults');
const db = require('../dbConfig/init');

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

  ////all the different functions get/create/update/delete
}

module.exports = Habit;
