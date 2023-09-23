import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootStateType } from '.';

export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
