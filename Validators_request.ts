import axios from "axios";
import { load } from 'ts-dotenv';

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
//const response = axios.get(URL + "starships");
getValidators()
    .then(res => {
        //console.log(res.data);
        console.log(res["validators"].length);
        //console.log(res.data.validators[res.data.validators.length - 1]);
    })
    .catch(err => {
        console.log("Error", err);
    })
