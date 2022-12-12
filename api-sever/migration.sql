 DROP TABLE IF EXISTS scoreboard;
 DROP TABLE IF EXISTS quiz;

CREATE TABLE quiz(
        id serial PRIMARY KEY,
        question text,
        correct_answer text [],
        incorrect_answer text [],
        can_edit boolean 
    );
    
  CREATE TABLE scoreboard(
    id serial PRIMARY KEY,
    name varchar,
    age integer,
    score integer
);