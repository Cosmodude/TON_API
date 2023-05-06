import axios from 'axios';
import { ValidatorsDataSource } from 'path/to/validatorsDataSource';
import { Pool } from 'path/to/pool';
import { env } from 'path/to/env';

class ValidatorService {
  async getOurValidatorsAddresses() {
    await ValidatorsDataSource.initialize();
    const ourValidators = await ValidatorsDataSource.manager.find(Pool);
    const addresses = [];
    for (let validator in ourValidators) {
      addresses.push(validator['address']);
    }
    console.log(ourValidators);
    console.log(addresses);
    return addresses;
  }

  async getValidators() {
    const serverSideKey = env.ServerSideKey;
    const tonapiURL = 'https://tonapi.io/v1/blockchain/validators';
    const headers = {
      'Authorization': 'Bearer ' + serverSideKey,
      Accept: 'application/json',
    };

    const { data, status } = await axios.get(tonapiURL, { headers: headers });
    console.log(status);
    return data;
  }

  async getOurValidatorsData() {
    const validatorsAddresses = [
      '-1:f08931ab0f6297ef9fc92f632c3cbcc0a9f25bd5e8a20d2137788a60c61dd2b6',
      '-1:658587ac24c7cc479728d59c53d741188e593c47fd957e37cc1f1ec3ea385bd8',
      '-1:bebb60e6baba8f4c655cad64f440c77682f56a430075015b2a250ac3017e7c79',
    ];

    try {
      const res = await this.getValidators();
      const ourValidatorsData = res['validators'].filter(validator => validatorsAddresses.includes(validator['address']));
      return ourValidatorsData;
    } catch (err) {
      console.log('Error', err);
    }
  }
}

// Example usage
(async () => {
  const validatorService = new ValidatorService();
  const ourValidatorsAddresses = await validatorService.getOurValidatorsAddresses();
  const ourValidatorsData = await validatorService.getOurValidatorsData();
  console.log(ourValidatorsData);
})();