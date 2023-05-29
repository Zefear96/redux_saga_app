import { AnyAction } from "redux";
import { User } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsersState {
	data: User[];
	loading: boolean;
	error: string | null;
}

const initialState: UsersState = {
	data: [],
	loading: false,
	error: null,
};

const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		fetchUsersRequest(state) {
			state.loading = true;
			state.error = null;
		},
		fetchUsersSuccess(state, action: PayloadAction<User[]>) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchUsersFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
	usersSlice.actions;

export default usersSlice.reducer;
