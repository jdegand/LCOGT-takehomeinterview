-- Up

CREATE TABLE planets(id INTEGER PRIMARY KEY, name STRING, size NUMBER, distance NUMBER, ordinality NUMBER, description STRING);

INSERT INTO planets(name, size, distance, ordinality, description) VALUES ("Mars", "0.107", "1.41", "4", "Mars is the dry and inhospitable 4th planet from the Sun.  It is here that Matt Damon grew potatoes using his own poop.")

-- Down

DROP TABLE planets;