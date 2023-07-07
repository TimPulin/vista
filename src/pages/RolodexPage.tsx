import TopBorder from '../components/TopBorder';
import Navigation from '../components/Navigation';
import Rolodex from '../components/rolodex/Rolodex';

export default function RolodexPage() {
  return (
    <div className="container">
      <div className="grid">
        <TopBorder />
        <Navigation />
        <Rolodex />
      </div>
    </div>
  );
}
