import React, { useState } from 'react';
import axios from 'axios';

import api from '../../services/api'; 

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
          new Credentials(""),   // Provider Key
         // new Credentials(""),  // Token
          { noRetryPolicy: true }
      );
      
      // Provider API
      const providerClient = new ProviderServiceClient(
          new ProviderCredentials(""),
          { noRetryPolicy: true }
      );
      
      // Wallet API
      const walletClient = new WalletServiceClient(
          new Credentials(""),
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

    return (
        <div>
            <h2>Organizations</h2>
                <p> Networks</p>
                {/*networks.map(network => <div>{network.networkName}</div>)*/}
        </div>
    );
};

export default Organizations;
