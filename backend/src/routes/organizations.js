const express = require('express');
const router = express.Router();
const cors = require('cors');
const { CredentialsServiceClient, Credentials } = require("@trinsic/service-clients");
require('dotenv').config();

  router.post('/organizations', async function (req, res) {
    let params = {
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      networkId: req.body.networkId,
      endorserType: req.body.endorserType
    }
    await adminClient.createTenant(params);
    res.sendStatus(200);
  });
  
  router.delete('/organizations/:organizationId', async function (req, res) {
    let tenantId = req.params.organizationId;
    await providerClient.deleteTenant(tenantId);
    res.sendStatus(200);
  });
  
  router.get('/organizations/:tenantId', async function (req, res) {
  
    let result = await providerClient.getTenant(req.params.tenantId);
   
    res.status(200).send(result);
  });
  
  
  router.get('/organizations', async function (req, res) {
  try {
  
    let tenants = await providerClient.listTenants();
    res.status(200).send(tenants);
  }
  catch (err) {
    console.log(err.message);
    return;
  }
  });
  
  router.patch('/organizations/:organizationId', async function (req, res) {
    let result = await providerClient.changeTenantKeys(req.params.organizationId);
    res.status(200).send(result);
  });