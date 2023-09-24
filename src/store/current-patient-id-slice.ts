import { createSlice } from '@reduxjs/toolkit';

type ActionType = {
  type: string;
  payload: number | null;
};

type CurrentPatientIdType = {
  value: number | null;
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
