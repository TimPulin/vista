import { createBrowserRouter } from 'react-router-dom';
import RolodexPage from '../pages/RolodexPage';
import PatientCardPage, { loader as patientLoader } from '../pages/PatientCardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RolodexPage />,
  },
  {
    path: 'patient-card/:id',
    loader: patientLoader,
    element: <PatientCardPage />,
  },

]);

// TODO сделать страницу "не найдено"
