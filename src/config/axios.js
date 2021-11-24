import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
        Accept: 'application/vnd.github.v3+json',
        CLIENT_ID: process.env.CLIENT_ID,
        CLIENT_SECRET: process.env.CLIENT_SECRET
        }
  });

  export default instance;