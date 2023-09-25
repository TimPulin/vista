import { createBrowserRouter } from 'react-router-dom';
import RootPage from '../pages/RootPage';
import RolodexPage, { loader as patientListLoader } from '../pages/RolodexPage';
import PatientCardPage, { loader as patientLoader } from '../pages/PatientCardPage';

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
    ],
  },

]);

// TODO сделать страницу "не найдено"
