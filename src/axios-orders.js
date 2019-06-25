import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-21aea.firebaseio.com/'
});

export default instance;