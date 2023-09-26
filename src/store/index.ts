import { configureStore } from '@reduxjs/toolkit';
import { updateCurrentLinkKeyReducer } from './slices/current-link-key-slice';
import { updateCurrentPatientIdReducer } from './slices/current-patient-id-slice';

export const store = configureStore({
  reducer: {
    currentLinkKey: updateCurrentLinkKeyReducer,
    currentPatientId: updateCurrentPatientIdReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
