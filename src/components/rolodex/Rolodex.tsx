import TitlePage from '../TitlePage';
import RolodexSearch from './RolodexSearch';
import RolodexTable from './RolodexTable';

export default function Rolodex() {
  return (
    <div className="content">
      <TitlePage title="Картотека" />
      <RolodexSearch />
      <RolodexTable />
    </div>
  );
}
