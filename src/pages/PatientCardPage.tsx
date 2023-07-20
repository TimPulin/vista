import TopBorder from '../components/TopBorder';
import MainMenu from '../components/MainMenu';
import PatientCard from '../components/patient-card/PatientCard';

export default function PatientCardPage() {
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
