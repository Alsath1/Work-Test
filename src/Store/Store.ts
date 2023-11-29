import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './redusers/UserSlice';
import WinStateSlice from './redusers/WindowState';
const rootReduser = combineReducers({
	userReducer,
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
