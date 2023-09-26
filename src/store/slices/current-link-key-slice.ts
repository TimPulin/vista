import { createSlice } from '@reduxjs/toolkit';

type ActionType = {
  type: string,
  payload: string,
};

type CurrentLinkKeyType = {
  value: string,
};

const initialState: CurrentLinkKeyType = {
  value: '2',
};

export const updateCurrentLinkKeySlice = createSlice({
  name: 'currentLinkKey',
  initialState,
  reducers: {
    updateCurrentLinkKey: (state: CurrentLinkKeyType, action: ActionType) => {
      state.value = action.payload;
    },
  },
});

export const { updateCurrentLinkKey } = updateCurrentLinkKeySlice.actions;
export const updateCurrentLinkKeyReducer = updateCurrentLinkKeySlice.reducer;
export type UpdateCurrentLinkKeyType = (key: string) => void;
export type UpdateCurrentLinkKeyReducerType = {
  updateCurrentLinkKey: (state: CurrentLinkKeyType, action: ActionType) => void;
};
