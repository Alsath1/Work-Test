import { createSlice } from '@reduxjs/toolkit';

interface WindowsState {
	StateWin: boolean;
}

const initialState: WindowsState = {
	StateWin: false
};

export const WinStateSlice = createSlice({
	name: 'winState',
	initialState,
	reducers: {
		winState(state, action) {
			state.StateWin = action.payload;
		}
	}
});

export default WinStateSlice.reducer;
