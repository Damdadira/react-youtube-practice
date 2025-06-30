import axios from 'axios';

export const popularData = () => {
  return axios.get('/mock/popular.json');
}