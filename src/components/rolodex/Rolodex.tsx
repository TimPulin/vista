import TitlePage from '../PageTitle';
import RolodexSearch from './RolodexSearch';
import RolodexTable, { RolodexTablePropsType } from './RolodexTable';

export default function Rolodex(props:RolodexTablePropsType) {
  return (
    <div className="content">
      <TitlePage title="Картотека" />
      <RolodexSearch />
      <RolodexTable patientsList={props.patientsList} />
    </div>
  );
}
