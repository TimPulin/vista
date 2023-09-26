import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import RolodexPage, { loader as patientListLoader } from '../pages/RolodexPage';
import PatientCardPage, { loader as patientLoader } from '../pages/PatientCardPage';
import NewPatientCardPage from '../pages/NewPatientCardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    children: [
      {
        path: '/',
        loader: patientListLoader,
        element: <RolodexPage />,
      },
      {
        path: 'patient-card/:id',
        loader: patientLoader,
        element: <PatientCardPage />,
      },
      {
        path: 'new-patient-card',
        element: <NewPatientCardPage />,
      },
    ],
  },

]);

// TODO сделать страницу "не найдено"
