const express = require('express');
const router = express.Router();
const cors = require('cors');
const { CredentialsServiceClient, Credentials } = require("@trinsic/service-clients");
const { connect } = require('../../../../trinsic/verifier-reference-app/routes/api');
require('dotenv').config();

const client = new CredentialsServiceClient(
    new Credentials(process.env.ACCESSTOK),
    { noRetryPolicy: true });

router.post('/issue', cors(), async function (req, res) {
  let params = {
    definitionId: process.env.CRED_DEF_ID,
    automaticIssuance: true,
    credentialValues: {
      "Full Name": req.body.name,
      "Parent": req.body.parent,
      "Date of Birth": req.body.dob,
      "Birth Number": req.body.birthNumber,
    }
  }
  console.log("Backend post - issued", req.body);
  let result = await client.createCredential(params);

  res.status(200).send({ offerData: result.offerData, offerUrl: result.offerUrl });
});

router.post('/verify', cors(), async function (req, res) {
  let verification = await client.createVerificationFromPolicy(process.env.POLICY_ID);
  console.log("Verification Policy ", verification);

  res.status(200).send({
    verificationRequestData: verification.verificationRequestData,
    verificationRequestUrl: verification.verificationRequestUrl,
    verificationId: verification.verificationId
  });
});

router.get('/checkVerification', cors(), async function (req, res) {
  let verificationId = req.query.verificationId;
  let verification = await client.getVerification(verificationId);

  res.status(200).send({
    verification: verification
  });
});

module.exports = router;