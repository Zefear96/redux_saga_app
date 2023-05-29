import { AnyAction } from "redux";
import { User } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
	data: User | null;
	loading: boolean;
	error: string | null;
}

const initialState: UserState = {
	data: null,
	loading: false,
	error: null,
};

const userByIdSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		fetchUserByIdRequest(state, action: PayloadAction<number>) {
			state.loading = true;
			state.error = null;
		},
		fetchUserByIdSuccess(state, action: PayloadAction<User>) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchUserByIdFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchUserByIdRequest,
	fetchUserByIdSuccess: fetchUserByIdSuccessAction,
	fetchUserByIdFailure,
} = userByIdSlice.actions;

export default userByIdSlice.reducer;
