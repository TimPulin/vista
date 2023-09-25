import { createSlice } from '@reduxjs/toolkit';

type ActionType = {
  type: string;
  payload: string | null;
};

type CurrentPatientIdType = {
  value: string | null;
};

const initialState: CurrentPatientIdType = {
  value: null,
};

const updateCurrentPatientIdSlice = createSlice({
  name: 'currentPatientId',
  initialState,
  reducers: {
    updateCurrentPatientId: (state:CurrentPatientIdType, action:ActionType) => {
      state.value = action.payload;
    },
  },
});

export const { updateCurrentPatientId } = updateCurrentPatientIdSlice.actions;
export const updateCurrentPatientIdReducer = updateCurrentPatientIdSlice.reducer;
export type UpdateCurrentPatientIdReducerType = {
  updateCurrentPatientId: (state:CurrentPatientIdType, action:ActionType) => void;
};
