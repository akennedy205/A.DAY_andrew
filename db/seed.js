db = connect('mongodb://localhost:27017/habitsapp'); //connect do mongo at this port

db.tracker.drop(); //drop table if exists
