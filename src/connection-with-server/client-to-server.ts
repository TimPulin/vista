import { axiosInstance as axios } from './axios-instance';

export function getPatients() {
  return axios
    .get('/users')
    .then((response) => {
      console.log(response.data.users);
    });
}
