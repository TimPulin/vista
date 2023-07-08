import TopBorder from '../components/TopBorder';
import Navigation from '../components/Navigation';
import PatientCard from '../components/patient-card/PatientCard';

export default function PatientCardPage() {
  return (
    <div className="container">
      <div className="grid">
        <TopBorder />
        <Navigation />
        <PatientCard />
      </div>
    </div>
  );
}
