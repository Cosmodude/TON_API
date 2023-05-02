import axios from "axios";
import { load } from 'ts-dotenv';

const env = load({
    ServerSideKey: String,
})

const serverSideKey = env.ServerSideKey; 
const exampleURL = 'https://swapi.dev/api/';
const tonapi = "https://tonapi.io/v1/blockchain/validators";

const headers = { 'Authorization': 'Bearer ' + serverSideKey };
const getValidators = () => {
    return axios.get(tonapi, { headers: headers });
}
//const response = axios.get(URL + "starships");
getValidators()
    .then(res => {
        //console.log(res.data);
        console.log(res.data.validators.length);
        console.log(res.data.validators[res.data.validators.length - 1]);
    })
    .catch(err => {
        console.log("Error", err);
    })
