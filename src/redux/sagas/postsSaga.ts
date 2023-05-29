import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { fetchPostsSuccess, fetchPostsFailure } from "../reducers/postsSlice";
import { AnyAction } from "redux";

export function* fetchPosts(action: AnyAction) {
	try {
		const { search, filter } = action.payload; // Получение параметров из action.payload
		const queryParams = {
			title_like: search || null,
			_sort: filter || null,
			_order: "asc" || null,
		};

		yield delay(500);
		const { data } = yield call(axios.get, `${API_URL}/posts`, {
			params: queryParams,
		});
		yield put(fetchPostsSuccess(data));
	} catch (error: any) {
		yield put(fetchPostsFailure(error.message));
	}
}
