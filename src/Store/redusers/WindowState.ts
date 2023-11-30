import { createSlice } from '@reduxjs/toolkit';

interface WindowsState {
	StateWin: boolean;
	winCurrent: string;
	currentCardInfo: string;
}

const initialState: WindowsState = {
	StateWin: false,
	winCurrent: '',
	currentCardInfo: 1
};

export const WinStateSlice = createSlice({
	name: 'winState',
	initialState,
	reducers: {
		winState(state, action) {
			state.StateWin = action.payload;
		},
		CurrentCard(state, action) {
			state.currentCardInfo = action.payload;
		},
		winCurrentstring(state, action) {
			state.winCurrent = action.payload.toLowerCase();
		}
	}
});

export default WinStateSlice.reducer;
