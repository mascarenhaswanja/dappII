# dappII
Capstone Project

## Self Sovereign Identity - Hyperledger Indy

Self-Sovereign Identity is a lifetime, portable digital identity for any person that does not depend on any centralized authority and can never be taken away. Ability for people to obtain, hold, manage and present their own digitally verifiable credentials (any purpose anywhere, privacy and security).

## Process

The process will configure the Birth Certificat at Service Ontario

Storytelling

1. Steward (onboarding process) creates a DID (Decentralized Identifiers) with Trust Anchor roles

      Service Ontario - Birth Certificate Issuer
         Create a schema (issue to ledger)

      School - Certificate School  
         Create a schema based on Birth Certificate (issue to ledger)

      University - Diploma
         Create a schema based on Birth Certificate (issue to ledger) 

2. School create a connection with student and issue the credential of conclusion

3. Student receive the credential and stores in the wallet

4. University request proof of school 

5. Student send a proof of credential received from school

Ledger - All Decentralized Identifier (DID), verinym and pairwise-unique DID 
https://medium.com/@kctheservant/exploring-hyperledger-indy-through-indy-dev-example-10075d2547ae
14/1701/08/2020
Exploring Hyperledger Indy through indy-dev Example | by KC Tam | Medium
Schemas, which defines the structure of items referred by both credential definitions
and credentials
Credential Definition, which is built on top of a schema, plus the issuer’s information
for proof creation
All these items are publicly accessible, and therefore is NOT secret at all to any
organizations or individuals.
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
MONGODB_URI_DEV=""
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
```

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

Source
   - [Hyperledger Indy](https://hyperledger-indy.readthedocs.io/en/latest/) - Documentation
   - [Medium](https://medium.com/@kctheservant/exploring-hyperledger-indy-through-indy-dev-example-10075d2547ae)
   - [BC-VON](https://vonx.io/) - British Columbia use case
  	- [VON-Network](https://github.com/bcgov/von-network) - Hyperledger Indy network
   - [CULedger](https://www.culedger.com/) - Hyperledger Indy for Credit Unions
   - [Cloudagent](https://github.com/hyperledger/aries-cloudagent-python) - Hyperledger Aries for communication between SSI agents

