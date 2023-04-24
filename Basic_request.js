const axios = require('axios').default;
const dotenv = require('dotenv').config();

serverSideKey = process.env.ServerSideKey; 
const exampleURL = 'https://swapi.dev/api/';
const tonapi = "https://tonapi.io/v1/blockchain/validators";

headers = { 'Authorization': 'Bearer ' + serverSideKey };
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
