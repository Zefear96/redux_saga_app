import { AnyAction } from "redux";
import { Comments, Post } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CommentsState {
	data: Comments[];
	loading: boolean;
	error: string | null;
}

const initialState: CommentsState = {
	data: [],
	loading: false,
	error: null,
};

const commentsSlice = createSlice({
	name: "comments",
	initialState,
	reducers: {
		fetchCommentsRequest(state) {
			state.loading = true;
			state.error = null;
		},
		fetchCommentsSuccess(state, action: PayloadAction<Comments[]>) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchCommentsFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	fetchCommentsRequest,
	fetchCommentsSuccess,
	fetchCommentsFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;
