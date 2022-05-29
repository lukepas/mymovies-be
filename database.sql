CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE favoritemovies;

CREATE TABLE users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    password2 TEXT NOT NULL,
    UNIQUE(email)
);

CREATE TABLE movies (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT
);

INSERT INTO users (name, email, password) VALUES ('Lukas', 'lukas@email.com', 'lukas123');

SELECT * FROM users;

INSERT INTO movies (title, description) VALUES ('The Batman', 'Batman ventures into Gotham City`s underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator`s plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis.');

INSERT INTO movies (title, description) VALUES ('Star Wars: A New Hope (Episode IV)', 'Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire.');

INSERT INTO movies (title, description) VALUES ('The Lord of the Rings: The Fellowship of the Ring', 'A young hobbit, Frodo, who has found the One Ring that belongs to the Dark Lord Sauron, begins his journey with eight companions to Mount Doom, the only place where it can be destroyed.');

SELECT * FROM movies;

--psql -U postgres 
--\c favoritemovies
--\dt 
