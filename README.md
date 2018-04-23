# GiveBack

GiveBack is a group bill splitting app for all your trips. 

This project is being made as a Mini Project for the CSharp practical laboratory, 8th semester CSE.

## Technology Stack

- Hapi.js Server
- Xamarin.Forms mobile app
- PostgreSQL database
- Sequelize ORM
- GraphQL

## Running the project

- Create a `.env` file at the project level (same directory as this README) and place all configuration environment variables there:

Example:
```
HOST=0.0.0.0
PORT=8080

DEV_DB_USER=saurav
DEV_DB_PASS=password
DEV_DB_NAME=gbd
DEV_DB_HOST=127.0.0.1
```

- Install dependencies
```
yarn
```

- Create the database
```
yarn sequelize db:create
```

- Update the database with tables
```
yarn reset
```

- Start the project
```
yarn start
```