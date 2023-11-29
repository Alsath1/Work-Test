import { createSlice } from '@reduxjs/toolkit';
import { ICompany } from '../../models/ICompany';

interface UserState {
	users: ICompany[];
	count: number;
}

const initialState: UserState = {
	users: [],
	count: 0
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		incerment(state, action) {
			state.count += action.payload;
		}
	}
});

export default userSlice.reducer;
