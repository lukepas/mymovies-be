# Backend of mymovies-app 🛠

Created with Express.js, PostgreSQL.

In order to run make sure you have PostgreSQL database on your local machine.

## Setup your .env 🔧

For reference

USER = postgres
PASSWORD = postgres or *your superusers password**
HOST = localhost
PORT = 5000
LOCAL_PORT = 5432
DATABASE = favoritemovies
ACCESS_TOKEN_SECRET = *Your super secret access token*
REFRESH_TOKEN_SECRET = *Your super refresh access token*
URL = "http://localhost:3000"
COOKIE_DOMAIN = localhost

### To start up 🚀

npm i

use database.sql to create database

nodemon index


### App features 💡

Basic CRUD of a list items (in this case movies)
Create and login user (There are few basic validations. For example same email can't be used twice)


