import { axiosInstance as axios } from './axios-instance';

export function getPatientsList() {
  return axios
    .get('/users')
    .then((response) => response.data.users)
    .catch((error) => error);
}

export function getPatient(patientId: string) {
  return axios
    .get(`/users/${patientId}`)
    .then((response) => response.data)
    .catch((error) => error);
}
