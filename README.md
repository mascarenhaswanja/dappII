# dappII
Capstone Project
Wanja Mascarenhas - 101280022

## Self Sovereign Identity - Hyperledger Indy

Self-Sovereign Identity is a lifetime, portable digital identity for any person that does not depend on any centralized authority and can never be taken away. Ability for people to obtain, hold, manage and present their own digitally verifiable credentials (any purpose anywhere, privacy and security).

## How to run

For run this project we will need two terminals:

    1st terminal: Server on http://localhost:5000/

    2nd terminal: Frontend on http://localhost:3000/
  
Open 1st terminal and clone the project

```sh
# Clone this repo
git clone https://github.com/mascarenhaswanja/dappII.git

# Go to the project folder
cd dappII
```

To run the application we will need to set your own configurations 
  Create the following .env file in backend

```json
// ./backend/.env

# -------------  Backend Credentials  ----------------- #
PORT=5000
MONGODB_URI_DEV="mongodb+srv://user:password@cluster0-t8c4x.mongodb.net/Certificate?retryWrites=true&w=majority"
PRIVATE_KEY=""

# ------------- Developer Credentials ----------------- #
ACCESSTOK=''

# ------------- Credential Definition ----------------- #
CRED_DEF_ID=''

# ------------- Policy Id ----------------------------- #
POLICY_ID=''

# ------------- Sovrin Staging Schema ----------------- #
SCHEMA_ID=''
```
``` sh

## In the 1st terminal ##

# Go to the backend application
cd backend

# Install dependencies
npm install

# Run backend application
npm run start
```
``` sh

## In the 2nd terminal ##

# Go to the frontend application
cd frontend

# Install dependencies
npm install
# Run API application
npm run start
```
``` sh

#### Login credentials

- username: admin
- password: 12345

## Resources and technologies 

- [Hyperledger Indy](https://github.com/hyperledger/indy-sdk)
- [Trinsic API](https://docs.trinsic.id/docs)

Backend

   - [Express.js](http://expressjs.com/) - web application framework
   - [MongoDB](https://www.mongodb.com/) - NoSQL database
   - [Mongoose](https://mongoosejs.com/) - object data modeling (ODM) library for MongoDB and Node.js
   - [Express validator](https://express-validator.github.io/docs/) - middleware to validate data
   - [Bcryptjs](https://www.npmjs.com/package/bcryptjs) - library to perform cryptography
   - [JWT.IO](https://jwt.io/) - JSON Web Tokens to allow, decode, verify and generate JWT
   - [Dotenv](https://www.npmjs.com/package/dotenv) - loads environment variables from a .env file

Frontend
   - [ReactJS](https://reactjs.org/) - frontend library
   - [React router dom](https://www.npmjs.com/package/react-router-dom) - routing and navigation for react apps
   - [React-cookie](https://www.npmjs.com/package/react-cookie) - cookie interaction for React applications