import { createBrowserRouter } from 'react-router-dom';
import RolodexPage from '../pages/RolodexPage';
import PatientCardPage from '../pages/PatientCardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RolodexPage />,
  },
  {
    path: 'patient-card',
    element: <PatientCardPage />,
  },

]);
