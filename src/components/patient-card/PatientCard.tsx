import TitlePage from '../PageTitle';
import PatientCardForm from './PatientCardForm';
import { PatientType } from '../../types/types';

type PatientCardPropsType = {
  title: string;
  patient: PatientType | null;
};

export default function PatientCard(props: PatientCardPropsType) {
  return (
    <div className="content">
      <TitlePage title={props.title} />
      <PatientCardForm patient={props.patient} />
    </div>
  );
}
