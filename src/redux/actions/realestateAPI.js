import axios from 'axios';

// https://promicrm20220225174254.azurewebsites.net
// https://localhost:44324
const realestateAPI = axios.create({
    baseURL: 'https://localhost:44305',
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

export default realestateAPI;