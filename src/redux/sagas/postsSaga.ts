import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import { fetchPostsSuccess, fetchPostsFailure } from "../reducers/postsSlice";

export function* fetchPosts() {
	try {
		yield delay(500);
		const { data } = yield call(axios.get, `${API_URL}/posts`);
		yield put(fetchPostsSuccess(data));
	} catch (error: any) {
		yield put(fetchPostsFailure(error.message));
	}
}
