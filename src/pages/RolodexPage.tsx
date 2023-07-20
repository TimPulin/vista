import TopBorder from '../components/TopBorder';
import MainMenu from '../components/Menu';
import Rolodex from '../components/rolodex/Rolodex';

export default function RolodexPage() {
  return (
    <div className="container">
      <div className="grid">
        <TopBorder />
        <MainMenu />
        <Rolodex />
      </div>
    </div>
  );
}
