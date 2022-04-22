DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_1 VARCHAR(255) NOT NULL,
    habit_2 VARCHAR(255) NOT NULL,
    habit_3 VARCHAR(255) NOT NULL,
    habit_4 VARCHAR(255) NOT NULL
);
