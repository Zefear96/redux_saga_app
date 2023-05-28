import { AnyAction } from "redux";
import { Post } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostsState {
	data: Post[];
	loading: boolean;
	error: string | null;
}

const initialState: PostsState = {
	data: [],
	loading: false,
	error: null,
};

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		fetchPostsRequest(state) {
			state.loading = true;
			state.error = null;
		},
		fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
			state.loading = false;
			state.data = action.payload;
		},
		fetchPostsFailure(state, action: PayloadAction<string>) {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const { fetchPostsRequest, fetchPostsSuccess, fetchPostsFailure } =
	postsSlice.actions;

export default postsSlice.reducer;
