CREATE DATABASE animals;
\c animals;
CREATE TABLE pets (
  id serial,
  name VARCHAR (50),
  image VARCHAR (350),
  description TEXT
);
