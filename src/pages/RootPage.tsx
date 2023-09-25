import { Outlet } from 'react-router-dom';
import TopBorder from '../components/TopBorder';
import MainMenu from '../components/MainMenu';

export default function RootPage() {
  return (
    <div className="container">
      <div className="grid">
        <TopBorder />
        <MainMenu />
        <Outlet />
      </div>
    </div>
  );
}
