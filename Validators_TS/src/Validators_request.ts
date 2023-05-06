import axios from "axios";
import { load } from 'ts-dotenv';
import { DataSource, Repository } from 'typeorm';
import { Pool } from './entity/pool.entity';
import { ValidatorsDataSource } from './Validators_DataSource'

const env = load({
    ServerSideKey: String,
});

type GetResponse = {
    data: []
}

export class Validators {
    
    async getOurValidatorsAdresses() {
        await ValidatorsDataSource.initialize();
        const ourValidators = await ValidatorsDataSource
            .manager
            .find(Pool)
        const adrresses = [];
        for (let validator in ourValidators) {
            adrresses.push(validator["address"]);
        }
        console.log(ourValidators);
        console.log(adrresses);
        return adrresses;
    }

    async getValidators() {
        const serverSideKey = env.ServerSideKey;
        const exampleURL = 'https://swapi.dev/api/';
        const tonapiURL = "https://tonapi.io/v1/blockchain/validators";


        const headers = { 'Authorization': 'Bearer ' + serverSideKey, Accept: 'application/json' };

        const { data, status } = await axios.get<GetResponse>(tonapiURL, { headers: headers });
        console.log(status);
        return data;
    }
    
    //const response = axios.get(URL + "starships");
    
    //const pool = new Pool();
    //pool.name = "Vlad";
    //console.log(pool);

}

getValidators()
        .then(res => {
            //console.log(res["validators"][1]["address"])
            const ourValidatorsData = res["validators"].filter(validator => validatorsAdrresses.includes(validator["address"]));
            //console.log(res["validators"]);
            //console.log(ourValidatorsData);
            //console.log(res.data.validators[res.data.validators.length - 1]);
        })
        .catch(err => {
            console.log("Error", err);
        })

        this.getOurValidatorsAdresses();