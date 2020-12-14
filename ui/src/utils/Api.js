import Axios from 'axios';

const API = () => {
  const hostName = 'http://localhost:8080';
  const options = {
    headers: { 'Access-Control-Allow-Origin': '*' },
    baseURL: `${hostName}`
  };

  return Axios.create(options);
};

export default API;
