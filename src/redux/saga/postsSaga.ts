import { put, takeEvery, all, call, delay } from "redux-saga/effects";
import axios from "axios";
import { API_URL } from "../../utils/constants";
import {
	fetchPostsRequest,
	fetchPostsSuccess,
	fetchPostsFailure,
} from "../reducers/index";
import { Post } from "../../utils/types";

function* fetchPosts() {
	try {
		yield delay(500);
		const { data } = yield call(axios.get, `${API_URL}/posts`);
		yield put(fetchPostsSuccess(data));
	} catch (error: any) {
		yield put(fetchPostsFailure(error.message));
	}
}

function* watchFetchPosts() {
	yield takeEvery(fetchPostsRequest, fetchPosts);
}

export default function* rootSaga() {
	yield all([watchFetchPosts()]);
}
