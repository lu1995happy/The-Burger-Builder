import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://the-burger-builder-8fb56.firebaseio.com/'
});

export default instance;