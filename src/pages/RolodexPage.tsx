import { useLoaderData, LoaderFunction } from 'react-router-dom';

import Rolodex from '../components/rolodex/Rolodex';
import { getPatientsList } from '../connection-with-server/client-to-server';
import { LoaderData, PatientType } from '../types/types';

export const loader = (async () => {
  const patientsList = await getPatientsList();
  return patientsList;
}) satisfies LoaderFunction;

export default function RolodexPage() {
  const patientsList = useLoaderData() as LoaderData<typeof loader>;
  const tablePatientList = patientsList.map((patient:PatientType) => ({
    id: patient.id,
    cartNumber: patient.bank.cardNumber,
    clientFio: `${patient.firstName} ${patient?.maidenName} ${patient.lastName}`,
    birthday: patient.birthDate,
    eyesColor: patient.eyeColor,
    sex: patient.gender,
    bloodType: patient.bloodGroup,
    contacts: patient.phone,
    address: patient.address.address,
    email: patient.email,
  }));
  return (
    <Rolodex patientsList={tablePatientList} />
  );
}
