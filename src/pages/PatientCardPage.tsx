import { connect } from 'react-redux';
import { updateCurrentLinkKey } from '../store/current-link-key-slice';
import TopBorder from '../components/TopBorder';
import MainMenu from '../components/MainMenu';
import PatientCard from '../components/patient-card/PatientCard';

function PatientCardPage() {
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
