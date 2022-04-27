db = connect('mongodb://localhost:27017/habitsapp'); //connect do mongo at this port

db.userTracker.drop(); //drop table if exist

db.userTracker.insertMany([
  {
    username: 'Harambe',
    name: 'Bossman Onur',
    age: 21,
    gender: 'gigachad',
    email: 'OnurSexyBoy@gmail.com',
    password: '12345ItsGOATED',
    quote: 'I will sleep when the grind stops, but the grind never dies',
    habits: [
      {
        name: 'Smoking my plant',
        frequency: 'daily',
        count: 24,
        date: '27/04/2022',
        improvement: 'Undefined',
      },
      {
        name: 'Sigma Grind',
        frequency: 'monthly',
        days: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun', 'sig'],
        time: [
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
          '06:00',
          '18:00',
        ],
        date: '27/04/2022',
        completed: 'forever',
      },
    ],
  },
  {
    username: 'PrettyBoy69',
    name: 'user7',
    age: 25,
    gender: 'gigachad',
    email: 'AaftabSexyBoy@gmail.com',
    password: '12345ItsCool',
    habits: [
      {
        name: 'Coffee Intake',
        frequency: 'daily',
        count: 4,
        date: '27/04/2022',
        improvement: 'no',
      },
      {
        name: 'Exersise',
        frequency: 'weekly',
        days: ['mon', 'thur'],
        time: ['19:00', '20:00', '10:30', '11:00'],
        date: '27/04/2022',
        completed: 'yes',
      },
    ],
  },
]);
