db = connect('mongodb://localhost:27017/habitsapp'); //connect do mongo at this port

db.userTracker.drop(); //drop table if exist

db.userTracker.insertMany([
  {
    username: 'test_user1',
    name: 'user1',
    email: 'test@user',
    password: 'user1',
    habit: [
      {
        habit1: 'Running',
        tracker: [
          {
            date: '02/10/2022',
            day: 'Wednesday',
            start_time: '07:30',
            end_time: '8:48',
          },
        ],
        habit2: 'Drinking water',
        tracker: [
          {
            date: '02/10/2022',
            day: 'Wednesday',
            start_time: '06:30',
            end_time: '7:48',
          },
        ],
      },
    ],
  },
  {
    username: 'test_user2',
    name: 'user2',
    email: 'test@user2',
    password: 'user2',
    habit: 'Swimming',
    date: '03/10/2022',
    day: 'Thrusday',
    start_time: '07:45',
    end_time: '9:37',
  },
  {
    username: 'test_user3',
    name: 'user3',
    email: 'test@user3',
    password: 'user3',
    habit: 'Walking',
    date: '04/10/2022',
    day: 'Friday',
    start_time: '07:50',
    end_time: '9:12',
  },
  {
    username: 'test_user4',
    name: 'user4',
    email: 'test@user4',
    password: 'user4',
    habit: 'Jogging',
    date: '05/10/2022',
    day: 'Saturday',
    start_time: '07:34',
    end_time: '9:17',
  },
  {
    username: 'test_user5',
    name: 'user5',
    email: 'test@user5',
    password: 'user5',
    habit: 'Drinking water',
    date: '09/10/2022',
    day: 'Monday',
    start_time: '09:34',
    end_time: '10:40',
  },
  {
    username: 'test_user6',
    name: 'user6',
    email: 'test@user6',
    password: 'user6',
    habit: 'Eating junk food',
    date: '09/10/2022',
    day: 'Monday',
    start_time: '09:34',
    end_time: '10:40',
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
        improvement: 'no'
      },
      {
        name: 'Exersise',
        frequency: 'weekly',
        days: ['mon','thur'],
        time: ['19:00', '20:00', '10:30', '11:00'],
        date: '27/04/2022',
        completed: 'yes'
      }
    ]
  }
]);
