/* eslint-disable-next-line */
import React from 'react';
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootStateType } from '.';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;

export function useCurrentPatientId() {
  const id = useSelector((store:RootStateType) => store.currentPatientId.value);
  return id;
}

export function useCurrentLinkKey() {
  const key = useSelector((store: RootStateType) => store.currentLinkKey.value);
  return key;
}
