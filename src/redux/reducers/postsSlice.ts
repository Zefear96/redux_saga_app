import { Post } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PostsState {
	data: Post[];
	loading: boolean;
	error: string | null;
	searchQuery: string;
	orderQuery: string;
}

const initialState: PostsState = {
	data: [],
	loading: false,
	error: null,
	searchQuery: "",
	orderQuery: "asc",
};

interface FetchPostsRequestPayload {
	search: string | null;
	order: string | null;
}

const postsSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		fetchPostsRequest(state, action: PayloadAction<FetchPostsRequestPayload>) {
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
		setSearchQuery(state, action: PayloadAction<string>) {
			state.searchQuery = action.payload;
			state.loading = true; // Устанавливаем флаг загрузки в true
			state.error = null; // Сбрасываем сообщение об ошибке
			state.data = []; // Очищаем массив данных постов
		},
		setOrderQuery(state, action: PayloadAction<string>) {
			state.orderQuery = action.payload;
			state.loading = true; // Устанавливаем флаг загрузки в true
			state.error = null; // Сбрасываем сообщение об ошибке
			state.data = []; // Очищаем массив данных постов
		},
	},
});

export const {
	fetchPostsRequest,
	fetchPostsSuccess,
	fetchPostsFailure,
	setSearchQuery,
	setOrderQuery,
} = postsSlice.actions;

export default postsSlice.reducer;
