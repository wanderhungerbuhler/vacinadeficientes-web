import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vacinadeficientes.herokuapp.com',
});

export default api;
