const express = require('express');
const router = express.Router();
const cors = require('cors');
const { CredentialsServiceClient, Credentials } = require("@trinsic/service-clients");
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

router.get('/listalltenant', cors(), async function (req, res) {
  try {
    let tenants = await providerClient.listTenants();
    res.status(200).send(tenants);
  }
  catch (err){
    console.log(res.status);

  }
});

router.get('/getCredentials/:credentialId', async function (req, res){
  let credentialId = req.params.credentialId;
  let credential = await credentialsClient.getCredential(credentialId);
  res.status(200).send(credential);
});

router.delete ('/revokeAnIssuedCred/:credentialId', async function (req, res){
  let credentialId = req.params.credentialId;
  let credential = await credentialsClient.revokeCredential(credentialId);
  res.status(200).send(credential);
});

router.delete ('/deleteCredentials/:credentialId', async function (req, res){
  let credentialId = req.params.credentialId;
  let credential = await credentialsClient.deleteCredential(credentialId);
  res.status(200).send(credential);
});

router.get ('/getAllVerPol', cors(), async function (req, res){
  let verifications = await credentialsClient.listVerificationPolicies();
  res.status(200).send(verifications);
});

router.post('/createVerPol', async function (req, res) {
    let verificationPolicy = await credentialsClient.createVerificationPolicy({
    name: "Verification Name",
    version: "1.0", // Must follow Semantic Versioning scheme (https://semver.org),
    attributes: req.body.attributePolicies,
    predicates: req.body.predicatePolicies,
    revocationRequirement: req.body.revocationRequirement
  });
  res.status(200).send(verificationPolicy);
});

router.get('/getVerPol/:policyId', cors(), async function (req, res){
  let policyId = req.params.policyId;
  let verificationPolicy = await credentialsClient.getVerificationPolicy(policyId);
  res.status(200).send(verificationPolicy);
});

router.delete('/deleteVerPol/:policyId', async function (req, res){
  let policyId = req.params.policyId;
  let response =  await credentialsClient.deleteVerificationPolicy(policyId);
  res.status(200).send(response);
});

module.exports = router;