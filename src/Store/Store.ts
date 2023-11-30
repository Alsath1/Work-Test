import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CompSlice from './redusers/UserSlice';
import WinStateSlice from './redusers/WindowState';
const rootReduser = combineReducers({
	CompSlice,
	WinStateSlice
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReduser
	});
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
