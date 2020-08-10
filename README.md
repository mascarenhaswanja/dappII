# Identity Freedom

## Self Sovereign Identity - Hyperledger Indy - Overview

Self-Sovereign Identity is a lifetime, portable digital identity for any person that does not depend on any centralized authority and can never be taken away. Ability for people to obtain, hold, manage and present their own digitally verifiable credentials (any purpose anywhere, privacy and security).

Hyperledger Indy provides tools, libraries, and reusable components for providing digital identities rooted on blockchain. 
- Self-sovereignity - Indy stores identity on a ledger with distributed ownership.
- Privacy - owner can operate without creating any correlation risk or breadcrumbs.
- Verifiable claims - Identity claims can resemble familiar credentials such as birth certificates, driver’s licenses, passports, and so on. These credentials can be combined and transformed. Also, enable selective disclosure of the context.

Indy uses a modified version of Redundant Byzantine Fault Tolerance (RBFT) consensus called Plenum.

Indy is a public and permissioned blockchain.

Available on the Ledger (publicly accessible)
   - All Decentralized Identifier (DID), verinym and pairwise-unique DID 
   - Schemas - defines the structure of items referred by both credential definitions and credentials
   - Credential Definition - built on top of a schema, plus the issuer’s information for proof creation

Personally Identifiable Information (PII) (Not in the Ledger)
   - Not readily accessible by anyone. PII is used to communicate via peer connections. And these connection is secured, through authenticated encryption, and information shared between is only known to the two parties. 

## Process

The process will configure the Birth Certificate at Service Ontario

Storytelling

1. Steward (onboarding process) creates a DID (Decentralized Identifiers) with Trust Anchor roles

      Service Ontario - Birth Certificate Issuer
         Create a schema (issue to ledger)

      School - Credential School  
         Create a schema based on Birth Certificate (issue to ledger)

      University - Credential Diploma   
         Create a schema based on School credential (issue to ledger) 

2. School create a connection with student and issue the credential of conclusion

3. Student receive the credential and stores in the wallet

4. University request proof of school 

5. Student send a proof of credential received from school


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
   - [Hyperledger Indy](https://hyperledger-indy.readthedocs.io/en/latest/) - Documentation Hyperledger Indy
   - [Hyperledger Indy White Paper](https://www.hyperledger.org/wp-content/uploads/2018/08/HL_Whitepaper_IntroductiontoHyperledger.pdf)
   - [W3C](https://www.w3.org/TR/did-use-cases/) - Use Cases and Requirements for Decentralized Identifiers
   - [Sovrin](https://sovrin.org/) - Sovrin Network for digital credentials- Zero Knowledge Proofs (ZKPs)
   - [Evernym](https://www.evernym.com/) - platform for verifiable credentials
   - [BC-VON](https://vonx.io/) - British Columbia use case
   - [VON-Network](https://github.com/bcgov/von-network) - Hyperledger Indy network
   - [CULedger](https://www.culedger.com/) - Hyperledger Indy for Credit Unions
   - [Medium](https://medium.com/@kctheservant/exploring-hyperledger-indy-through-indy-dev-example-10075d2547ae) - Exploring Hyperledger Indy through indy-dev
   - [Cloudagent](https://github.com/hyperledger/aries-cloudagent-python) - Hyperledger Aries for communication between SSI agents