DROP TABLE IF EXISTS tracker;

CREATE TABLE tracker (
    id serial PRIMARY KEY,
    user_id VARCHAR(8),
    habit_id VARCHAR(8),
    date INT,
    day VARCHAR(10),
    start_time INT ,
    end_time INT,
    time_spent INT
);
