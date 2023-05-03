import axios from "axios";
import { load } from 'ts-dotenv';
import { DataSource, Repository } from 'typeorm';

const env = load({
    ServerSideKey: String,
})


const serverSideKey = env.ServerSideKey; 
const exampleURL = 'https://swapi.dev/api/';
const tonapiURL = "https://tonapi.io/v1/blockchain/validators";
type GetResponse = {
    data:[]
}

console.log(exampleURL);
const headers = { 'Authorization': 'Bearer ' + serverSideKey, Accept: 'application/json' };

const getValidators = async function () {
    const { data, status } = await axios.get<GetResponse>(tonapiURL, { headers: headers });
    console.log(status);
    return data;
}
const validatorsAdrresses = [
    '-1:f08931ab0f6297ef9fc92f632c3cbcc0a9f25bd5e8a20d2137788a60c61dd2b6',
    '-1:658587ac24c7cc479728d59c53d741188e593c47fd957e37cc1f1ec3ea385bd8',
    '-1:bebb60e6baba8f4c655cad64f440c77682f56a430075015b2a250ac3017e7c79',
]
//const response = axios.get(URL + "starships");
getValidators()
    .then(res => {
        console.log(res["validators"][1]["address"])
        const ourValidators = res["validators"].filter(validator =>  validatorsAdrresses.includes(validator["address"]));
        //console.log(res["validators"]);
        console.log(ourValidators);
        //console.log(res.data.validators[res.data.validators.length - 1]);
    })
    .catch(err => {
        console.log("Error", err);
    })
