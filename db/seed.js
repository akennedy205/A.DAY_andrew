db = connect('mongodb://localhost:27017/habitsapp'); //connect do mongo at this port

db.userTracker.drop(); //drop table if exist
db.habitTracker.drop(); //drop table if exist

db.userTracker.insertMany([
  {
    username: 'admin',
    name: 'admin',
    email: 'admin@gmail.com',
    password: '$2a$04$8cvawn5UItCYkX4W2wf25uiELfiEeXmQ1D9oojUSxNAWvanUVieXG',
  },
  {
    username: 'admin2',
    name: 'admin2',
    email: 'admin2@gmail.com',
    password: '$2a$04$8cvawn5UItCYkX4W2wf25uiELfiEeXmQ1D9oojUSxNAWvanUVieXG',
  },
  {
    username: 'admin3',
    name: 'admin3',
    email: 'admin3@gmail.com',
    password: '$2a$04$8cvawn5UItCYkX4W2wf25uiELfiEeXmQ1D9oojUSxNAWvanUVieXG',
  },
]);

db.habitsTracker.insertMany([
  {
    username: 'admin',
    habit: ['Drinking Energy drinks'],
    frequency: ['daily'],
    count: [1],
  },
  {
    username: 'admin2',
    habit: ['Going to restaurants'],
    frequency: ['weekly'],
    count: [1],
  },
  {
    username: 'admin3',
    habit: ['Running', 'eating junk food'],
    frequency: ['daily'],
    count: [0],
  },
]);

// db.userTracker.insertMany([
//   {
//     username: 'harambe',
//     name: 'Bossman Onur',
//     age: 21,
//     email: 'admin@gmail.com',
//     password: '$2a$04$8cvawn5UItCYkX4W2wf25uiELfiEeXmQ1D9oojUSxNAWvanUVieXG',
//     quote: 'I will sleep when the grind stops, but the grind never dies',
//     habits: [
//       {
//         name: 'Smoking my plant',
//         frequency: 'daily',
//         count: 24,
//         date: '27/04/2022',
//         improvement: 'Undefined',
//       },
//       {
//         name: 'Sigma Grind',
//         frequency: 'monthly',
//         days: ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun', 'sig'],
//         time: [
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//           '06:00',
//           '18:00',
//         ],
//         date: '27/04/2022',
//         completed: 'forever',
//       },
//     ],
//   },
//   {
//     username: 'prettyBoy69',
//     name: 'user7',
//     age: 25,
//     gender: 'gigachad',
//     email: 'AaftabSexyBoy@gmail.com',
//     password: '12345ItsCool',
//     habits: [
//       {
//         name: 'Coffee Intake',
//         frequency: 'daily',
//         count: 4,
//         date: '27/04/2022',
//         improvement: 'no',
//       },
//       {
//         name: 'Exersise',
//         frequency: 'weekly',
//         days: ['mon', 'thur'],
//         time: ['19:00', '20:00', '10:30', '11:00'],
//         date: '27/04/2022',
//         completed: 'yes',
//       },
//     ],
//   },
// ]);
