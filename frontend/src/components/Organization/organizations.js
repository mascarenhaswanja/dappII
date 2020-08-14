import React, { useState, useEffect } from 'react';
import axios from "axios";

       
//  Provider Key: gmEqAsvVpd3pNDlK3l1Wl_TEJtjdZkpIB6Mf9t2MdpQ
const Organizations =  () => {
    const {
        CredentialsServiceClient,
        ProviderServiceClient,
        WalletServiceClient,
        Credentials,
        ProviderCredentials 
      } = require("@trinsic/service-clients");
      
      // Credentials API
      const credentialsClient = new CredentialsServiceClient(
          new Credentials("gmEqAsvVpd3pNDlK3l1Wl_TEJtjdZkpIB6Mf9t2MdpQ"),   // Provider Key
         // new Credentials("-whZih3sILf8TAZl7iq_FN-8gr6GN4h4WXcxaTGjPpE"),  // Token
          { noRetryPolicy: true }
      );
      
      // Provider API
      const providerClient = new ProviderServiceClient(
          new ProviderCredentials("gmEqAsvVpd3pNDlK3l1Wl_TEJtjdZkpIB6Mf9t2MdpQ"),
          { noRetryPolicy: true }
      );
      
      // Wallet API
      const walletClient = new WalletServiceClient(
          new Credentials("-whZih3sILf8TAZl7iq_FN-8gr6GN4h4WXcxaTGjPpE"),
          { noRetryPolicy: true }
      );
    //const [users, setUsers] = useState([]);

    const listNetworks = async () => {
        // let networks = await credentialsClient.listNetworks();
        // networks.forEach(network => console.log(network));
        let credential = await credentialsClient.getCredential();
        console.log(credential)
    }
    listNetworks();

    // Connections
    // let state = null; // Can be null | "Invited" | "Negotiating" | "Connected"
    // connections = await credentialsClient.listConnections(state);
    
    // Credentials
    // let connectionId = null; // Can be null | <connection identifier>
    // let state = null; // Can be null | "Offered" | "Requested" | "Issued" | "Rejected" | "Revoked"
    // let definitionId = null; // Can be null | <definition identifier>
    // let credentials = await credentialsClient.listCredentials(connectionId, state, definitionId);  
    /*useEffect(() => {
        let networks = await credentialsClient.listNetworks();
       
       // setUsers(networks);
       // console.log(networks[0]);
        /*
        axios.get('https://api.streetcred.id/provider/v1/tenants')
       //  https://api.streetcred.id/credentials/v1/common/networks')
       
        //axios.get('https://api.portal.streetcred.id/agent/C7d3Ew9fV8xxnRekPofMLFZhI24OpFDD')
        //axios.get('https://jsonplaceholder.typicode.com/users')        
        .then(res => {
            setUsers(res.data);
            console.log(res.data);
        }); 
    });*/

    /*let transcriptCredential = await faberClient.createCredentialDefinition({
        name: "College Transcript",
        version: "1.0",
        attributes: ["First Name", "Last Name", "Degree", "GPA", "Year"],
        supportRevocation: false,
        tag: "default"
      });*/
    
   // WOM trinsic
    /* Organizations
    https://api.portal.streetcred.id/agent/C7d3Ew9fV8xxnRekPofMLFZhI24OpFDD
    */
   /*const { CredentialsServiceClient: CredentialsServiceClient, Credentials } = require("@trinsic/service-clients");

   const client = new CredentialsServiceClient(new Credentials("-whZih3sILf8TAZl7iq_FN-8gr6GN4h4WXcxaTGjPpE"), { noRetryPolicy: true });
   
   const listOrganizations = async () => {
       var result = await client.listTenants();
       result.forEach(org => console.log(org));
   }
     
    const createVerificationPolicy = async () => {
       var response = await client.createVerificationPolicy({
           name: "verification-name",
           version: "1.0",
           attributes: [ {
                   policyName: "proof of valid id",
                   attributeNames: [
                       "first name",
                       "last name",
                       "address"
                   ]
               } ],
           predicates: [ {
                   policyName: "must be over 21",
                   attributeName: "age",
                   predicateType: ">",
                   predicateValue: 21,
                   restrictions: [ {
                       schemaName: "government id"
                   } ]
               } ]
       });
       var policy = await client.getVerificationPolicy(response.policyId);
       console.log(policy);
   }
   
   const createConnectionInvitation = async () => {
       var invitation = await client.createConnection({});
       console.log(invitation);
   }
   
   listOrganizations();
   
   createVerificationPolicy();
   
   createConnectionInvitation();
   */
    return (
        <div>
            <h2>Organizations</h2>
                <p> Networks</p>
                {/*networks.map(network => <div>{network.networkName}</div>)*/}
        </div>
    );
};

export default Organizations;