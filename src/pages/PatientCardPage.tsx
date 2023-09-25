import { connect } from 'react-redux';
import { useLoaderData, LoaderFunction } from 'react-router-dom';
import { updateCurrentLinkKey } from '../store/current-link-key-slice';
import TopBorder from '../components/TopBorder';
import MainMenu from '../components/MainMenu';
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
    <div className="container">
      <div className="grid">
        <TopBorder />
        <MainMenu />
        <PatientCard
          title="Карточка пациента"
          patient={patient.patient}
        />
      </div>
    </div>
  );
}

export default connect(null, { updateCurrentLinkKey })(PatientCardPage);
