const db = require('../dbConfig/init');

class User {
  constructor(data) {
    this.id = data.id;
    this.userName = data.user_name;
    this.firstName = data.first_name;
    this.lastName = data.last_name;
    this.email = data.email;
  }

  ////all the different functions get/create/update/delete
}

module.exports = User;
