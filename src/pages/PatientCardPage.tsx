import { connect } from 'react-redux';
import { useLoaderData, LoaderFunction } from 'react-router-dom';
import { updateCurrentLinkKey } from '../store/current-link-key-slice';
import PatientCard from '../components/patient-card/PatientCard';
import { LoaderData } from '../types/types';
// import { PatientType } from '../types/types';

import { getPatient } from '../connection-with-server/client-to-server';

export const loader = (async ({ params }: any) => {
  const patient = await getPatient(params.id);
  return { patient };
}) satisfies LoaderFunction;

function PatientCardPage() {
  const patient = useLoaderData() as LoaderData<typeof loader>;

  return (
    <PatientCard
      title="Карточка пациента"
      patient={patient.patient}
    />
  );
}

export default connect(null, { updateCurrentLinkKey })(PatientCardPage);
