# node_angular

-- Two Folders

1.  Frontend 2) Backend

# ----- Frontend ---------

step1: npm install // to install all packages for frontend
step2: ng serve // to start server

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# ----- Backend ---------

Config Folder for DB Connection
Modal Folder, to creating Schema for Storing Weights in Mongo DB

server.js File where api request, sockets, db connection etc used for interactin with Frontend.

step1: npm install // to install all necessary modules for backend
step2: node server.js // to start backend server.

## NOTE:

You have to install npm i dotenv for storing all your important data which was not accessible to every one.
Database url in whih username and password are gibven so to hide this from others you have to be use dotenv
