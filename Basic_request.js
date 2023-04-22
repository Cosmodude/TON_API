const axios = require('axios').default;
require('dotenv').config();
serverSideKey = process.env.ServerSideKey; 
const URL = 'https://swapi.dev/api/';
const tonapi = "https://tonapi.io/v1/blockchain/validators";

headers = { 'Authorization': 'Bearer ' + serverSideKey };
const response = axios.get(tonapi, { headers: headers });
//const response = axios.get(URL + "starships");
response.then(res => {
    //console.log(res.data);
    console.log(res.data.validators.length);
    console.log(res.data.validators[res.data.validators.length - 1]);
});
