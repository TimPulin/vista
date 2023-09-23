import { connect } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { updateCurrentLinkKey } from '../store/current-link-key-slice';
import TopBorder from '../components/TopBorder';
import MainMenu from '../components/MainMenu';
import PatientCard from '../components/patient-card/PatientCard';

import { getPatient } from '../connection-with-server/client-to-server';

export async function loader({ params }: any) {
  const patient = await getPatient(params.id);
  return { patient };
}

function PatientCardPage() {
  const patient = useLoaderData();
  console.log(patient);

  return (
    <div className="container">
      <div className="grid">
        <TopBorder />
        <MainMenu />
        <PatientCard />
      </div>
    </div>
  );
}

export default connect(null, { updateCurrentLinkKey })(PatientCardPage);
