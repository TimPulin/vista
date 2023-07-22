import { configureStore } from '@reduxjs/toolkit';
import { updateCurrentLinkKeyReducer } from './current-link-key-slice';

export const store = configureStore({
  reducer: {
    currentLinkKey: updateCurrentLinkKeyReducer,
  },
});

export type RootStateType = ReturnType<typeof store.getState>;
