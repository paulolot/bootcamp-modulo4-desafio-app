import axios from 'axios';

//Define a URL base da origem para consumo do servico
const http = axios.create({
  baseURL: 'https://bootcampmod4desafiofrontend.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
