var axios = require('axios');

export const BASE_URL = "";

export const API = axios.create({
    baseURL: "https://catfact.ninja/",
});